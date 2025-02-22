import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const brokers = [
  {
    name: 'Nordnet',
    logo: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=200',
    rating: 4.8,
    features: ['Low Fees', 'Wide Selection', 'Research Tools'],
    minDeposit: '€0',
  },
  {
    name: 'Avanza',
    logo: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=200',
    rating: 4.7,
    features: ['User Friendly', 'Educational Resources', 'Mobile App'],
    minDeposit: '€100',
  },
  {
    name: 'SaxoBank',
    logo: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=200',
    rating: 4.6,
    features: ['Professional Tools', 'Global Markets', 'Premium Service'],
    minDeposit: '€500',
  },
];

export default function BrokersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Compare Brokers</Text>
        <Text style={styles.subtitle}>Find the best broker for your investment needs</Text>
      </View>

      <View style={styles.filtersContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Stocks', 'ETFs', 'Crypto', 'Forex'].map((filter, index) => (
            <Pressable
              key={index}
              style={[styles.filterChip, index === 0 && styles.activeFilter]}>
              <Text
                style={[styles.filterText, index === 0 && styles.activeFilterText]}>
                {filter}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.brokersContainer}>
        {brokers.map((broker, index) => (
          <Pressable key={index} style={styles.brokerCard}>
            <View style={styles.brokerHeader}>
              <Image source={{ uri: broker.logo }} style={styles.brokerLogo} />
              <View style={styles.brokerInfo}>
                <Text style={styles.brokerName}>{broker.name}</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.ratingText}>{broker.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.featuresContainer}>
              {broker.features.map((feature, fIndex) => (
                <View key={fIndex} style={styles.featureChip}>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.depositInfo}>
              <Text style={styles.depositLabel}>Minimum Deposit</Text>
              <Text style={styles.depositAmount}>{broker.minDeposit}</Text>
            </View>
            <Pressable style={styles.compareButton}>
              <Text style={styles.compareButtonText}>Compare Details</Text>
            </Pressable>
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
  header: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#8E8E93',
    fontSize: 16,
    marginTop: 8,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterChip: {
    backgroundColor: '#2c2d30',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeFilter: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  activeFilterText: {
    color: '#fff',
  },
  brokersContainer: {
    padding: 20,
  },
  brokerCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  brokerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  brokerLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  brokerInfo: {
    flex: 1,
  },
  brokerName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 4,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  featureChip: {
    backgroundColor: '#3c3d40',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  featureText: {
    color: '#fff',
    fontSize: 14,
  },
  depositInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  depositLabel: {
    color: '#8E8E93',
    fontSize: 14,
  },
  depositAmount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  compareButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  compareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});