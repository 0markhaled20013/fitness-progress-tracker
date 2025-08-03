import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import axios from "axios";

import { API_BASE_URL } from "../config/api";
import StatCard from "../components/StatCard";
import ProgressEntryCard from "../components/ProgressEntryCard";
import AddButton from "../components/AddButton";
import { Colors, Spacing, FontSize } from "../styles/theme";

const screenWidth = Dimensions.get("window").width;

export default function DashboardScreen({ navigation }) {
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProgressData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/progress`);
      setProgressData(response.data);
    } catch (error) {
      console.error("Error fetching progress data:", error);
      Alert.alert(
        "Error",
        "Failed to fetch progress data. Please check your connection."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProgressData();
  };

  const calculateStats = () => {
    if (!progressData.length)
      return { totalReps: 0, totalCalories: 0, avgWeight: 0 };
    const totalReps = progressData.reduce((sum, i) => sum + i.reps, 0);
    const totalCalories = progressData.reduce((sum, i) => sum + i.calories, 0);
    const avgWeight =
      progressData.reduce((sum, i) => sum + i.weight, 0) / progressData.length;
    return { totalReps, totalCalories, avgWeight: avgWeight.toFixed(1) };
  };

  const prepareChartData = () => {
    if (!progressData.length)
      return { labels: ["No Data"], datasets: [{ data: [0] }] };
    const sorted = [...progressData].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return {
      labels: sorted.map(
        (i) =>
          `${new Date(i.date).getMonth() + 1}/${new Date(i.date).getDate()}`
      ),
      datasets: [{ data: sorted.map((i) => i.weight) }],
    };
  };

  const stats = calculateStats();
  const chartData = prepareChartData();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text style={styles.loadingText}>Loading your progress...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Fitness Journey</Text>
        <Text style={styles.headerSubtitle}>
          Track your progress, achieve your goals
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <StatCard number={stats.totalReps} label="Total Reps" />
        <StatCard number={stats.totalCalories} label="Calories Burned" />
        <StatCard number={stats.avgWeight} label="Avg Weight (kg)" />
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weight Progress</Text>
        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: Colors.cardBackground,
            backgroundGradientFrom: Colors.cardBackground,
            backgroundGradientTo: Colors.accent,
            decimalPlaces: 1,
            color: (o = 1) => `rgba(76, 175, 80, ${o})`,
            labelColor: (o = 1) => `rgba(255, 255, 255, ${o})`,
            propsForDots: { r: "6", strokeWidth: "2", stroke: Colors.primary },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      {/* Recent Entries */}
      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent Entries</Text>
        {progressData.length ? (
          progressData
            .slice(0, 5)
            .map((item) => (
              <ProgressEntryCard
                key={item._id}
                progress={item}
                onPress={() =>
                  navigation.navigate("EditProgress", { progress: item })
                }
              />
            ))
        ) : (
          <Text style={styles.noDataText}>
            No progress data yet. Add your first entry!
          </Text>
        )}
      </View>

      <AddButton
        title="+ Add Progress"
        onPress={() => navigation.navigate("AddProgress")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  loadingText: {
    color: Colors.textPrimary,
    marginTop: Spacing.sm,
    fontSize: FontSize.medium,
  },
  header: {
    padding: Spacing.lg,
    paddingTop: Spacing.xl,
    backgroundColor: Colors.cardBackground,
  },
  headerTitle: {
    fontSize: FontSize.xlarge + 4,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  headerSubtitle: { fontSize: FontSize.medium, color: Colors.textSecondary },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Spacing.lg,
    paddingTop: Spacing.md,
  },
  chartContainer: {
    backgroundColor: Colors.cardBackground,
    margin: Spacing.lg,
    borderRadius: 16,
    padding: Spacing.lg,
  },
  chartTitle: {
    fontSize: FontSize.large - 2,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    textAlign: "center",
  },
  chart: { borderRadius: 16 },
  recentContainer: { padding: Spacing.lg },
  sectionTitle: {
    fontSize: FontSize.large,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  noDataText: {
    color: Colors.textSecondary,
    textAlign: "center",
    fontSize: FontSize.medium,
    fontStyle: "italic",
  },
});
