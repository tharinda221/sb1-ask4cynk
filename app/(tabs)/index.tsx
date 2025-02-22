import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

export default function HomeScreen() {
  const today = format(new Date(), 'EEEE, MMMM do');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{today}</Text>
        <Text style={styles.greeting}>Welcome back, Alex!</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="trending-up" size={24} color="#32D74B" />
          <Text style={styles.statValue}>+2.4%</Text>
          <Text style={styles.statLabel}>Portfolio</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="bar-chart" size={24} color="#0A84FF" />
          <Text style={styles.statValue}>€8,946</Text>
          <Text style={styles.statLabel}>Balance</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="analytics" size={24} color="#FF9F0A" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Holdings</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Investment Recommendations</Text>
        <Pressable style={styles.recommendationCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800' }}
            style={styles.recommendationImage}
          />
          <View style={styles.recommendationInfo}>
            <Text style={styles.recommendationTitle}>Sustainable Energy ETFs</Text>
            <Text style={styles.recommendationMeta}>Low Risk • Long Term</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Market Updates</Text>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.updateCard}>
            <View style={styles.updateIcon}>
              <Ionicons name="newspaper" size={24} color="#fff" />
            </View>
            <View style={styles.updateInfo}>
              <Text style={styles.updateTitle}>Nordic Markets Show Strong Growth</Text>
              <Text style={styles.updateMeta}>2 hours ago • Market Analysis</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  date: {
    color: '#8E8E93',
    fontSize: 16,
  },
  greeting: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recommendationCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    overflow: 'hidden',
  },
  recommendationImage: {
    width: '100%',
    height: 200,
  },
  recommendationInfo: {
    padding: 16,
  },
  recommendationTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recommendationMeta: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  updateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  updateIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  updateInfo: {
    flex: 1,
  },
  updateTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  updateMeta: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
});