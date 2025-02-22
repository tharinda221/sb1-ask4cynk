import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const workouts = [
  {
    id: 1,
    title: 'Full Body Strength',
    duration: '45 min',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
  },
  {
    id: 2,
    title: 'HIIT Cardio',
    duration: '30 min',
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800',
  },
  {
    id: 3,
    title: 'Yoga Flow',
    duration: '60 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
  },
];

export default function WorkoutsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.categoriesContainer}>
        {['All', 'Strength', 'Cardio', 'Yoga', 'Pilates'].map((category, index) => (
          <Pressable
            key={index}
            style={[
              styles.categoryChip,
              index === 0 && styles.categoryChipActive,
            ]}>
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.categoryTextActive,
              ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Workouts</Text>
        {workouts.map((workout) => (
          <Pressable key={workout.id} style={styles.workoutCard}>
            <Image source={{ uri: workout.image }} style={styles.workoutImage} />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutMeta}>
                {workout.duration} • {workout.level}
              </Text>
              <View style={styles.workoutStats}>
                <View style={styles.stat}>
                  <Ionicons name="flame" size={16} color="#FF9500" />
                  <Text style={styles.statText}>350 cal</Text>
                </View>
                <View style={styles.stat}>
                  <Ionicons name="barbell" size={16} color="#32D74B" />
                  <Text style={styles.statText}>12 exercises</Text>
                </View>
              </View>
            </View>
          </Pressable>
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
  categoriesContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#2c2d30',
  },
  categoryChipActive: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#fff',
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
  workoutCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  workoutImage: {
    width: '100%',
    height: 200,
  },
  workoutInfo: {
    padding: 16,
  },
  workoutTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutMeta: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  workoutStats: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    color: '#8E8E93',
    fontSize: 14,
  },
});