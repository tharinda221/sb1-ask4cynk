import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Alex Thompson</Text>
        <Text style={styles.bio}>Nordic Investor • Risk Level: Moderate</Text>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Holdings</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>€23.5k</Text>
            <Text style={styles.statLabel}>Portfolio</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>184</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Investment Milestones</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Ionicons name="trophy" size={32} color="#FFD700" />
              </View>
              <Text style={styles.achievementTitle}>First Investment</Text>
              <Text style={styles.achievementDesc}>Successfully made your first stock purchase</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.activityCard}>
            <View style={styles.activityIcon}>
              <Ionicons name="trending-up" size={24} color="#fff" />
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>Bought NOKIA Stock</Text>
              <Text style={styles.activityMeta}>Yesterday • €347</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
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
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2d30',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    color: '#8E8E93',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#2c2d30',
    marginHorizontal: 24,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  achievementCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: 200,
  },
  achievementIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#3c3d40',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  achievementDesc: {
    color: '#8E8E93',
    fontSize: 14,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityMeta: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
});