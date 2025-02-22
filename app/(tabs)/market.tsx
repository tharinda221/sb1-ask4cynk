import { View, Text, StyleSheet, ScrollView, Pressable, Platform, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MarketScreen() {
  const { width } = useWindowDimensions();
  const chartWidth = Math.min(width - 40, 600); // Cap max width and account for padding
  const chartHeight = 200;

  // Separate chart components for web and native platforms
  const ChartComponent = Platform.select({
    web: () => (
      <View style={[styles.chartContainer, { width: chartWidth, height: chartHeight }]}>
        <View style={[styles.chart, { width: chartWidth, height: chartHeight }]}>
          <Text style={styles.chartPlaceholder}>Chart data loading...</Text>
        </View>
      </View>
    ),
    default: () => {
      const { LineChart } = require('react-native-chart-kit');
      return (
        <View style={[styles.chartContainer, { width: chartWidth }]}>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
            }}
            width={chartWidth}
            height={chartHeight}
            chartConfig={{
              backgroundColor: '#2c2d30',
              backgroundGradientFrom: '#2c2d30',
              backgroundGradientTo: '#2c2d30',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
              style: { borderRadius: 16 },
              propsForLabels: {
                fill: '#8E8E93',
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>
      );
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Overview</Text>
        <View style={styles.indexCard}>
          <Text style={styles.indexName}>OMXN40</Text>
          <View style={styles.indexDetails}>
            <Text style={styles.indexValue}>2,145.67</Text>
            <Text style={styles.indexChange}>+1.2%</Text>
          </View>
          <ChartComponent />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Movers</Text>
        {['NOKIA', 'VOLVO', 'ERICSSON'].map((stock, index) => (
          <Pressable key={index} style={styles.stockCard}>
            <View style={styles.stockInfo}>
              <Text style={styles.stockName}>{stock}</Text>
              <Text style={styles.stockExchange}>OMX Stockholm</Text>
            </View>
            <View style={styles.stockPrice}>
              <Text style={styles.priceValue}>€42.50</Text>
              <Text style={[styles.priceChange, index % 2 === 0 ? styles.positive : styles.negative]}>
                {index % 2 === 0 ? '+2.5%' : '-1.8%'}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Market News</Text>
        {[1, 2, 3].map((_, index) => (
          <Pressable key={index} style={styles.newsCard}>
            <View style={styles.newsContent}>
              <Text style={styles.newsTitle}>Nordic Markets Show Resilience Amid Global Uncertainty</Text>
              <Text style={styles.newsMeta}>Financial Times • 2h ago</Text>
              <Text style={styles.newsExcerpt}>
                Despite global market volatility, Nordic stock markets demonstrate strong performance...
              </Text>
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
  header: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  indexCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 20,
  },
  indexName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  indexDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  indexValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 12,
  },
  indexChange: {
    color: '#32D74B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  chart: {
    borderRadius: 16,
    backgroundColor: '#2c2d30',
  },
  chartPlaceholder: {
    color: '#8E8E93',
    textAlign: 'center',
    paddingVertical: 80,
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
  stockCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  stockInfo: {
    flex: 1,
  },
  stockName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stockExchange: {
    color: '#8E8E93',
    fontSize: 14,
    marginTop: 4,
  },
  stockPrice: {
    alignItems: 'flex-end',
  },
  priceValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceChange: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  positive: {
    color: '#32D74B',
  },
  negative: {
    color: '#FF453A',
  },
  newsCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden',
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsMeta: {
    color: '#8E8E93',
    fontSize: 14,
    marginBottom: 8,
  },
  newsExcerpt: {
    color: '#8E8E93',
    fontSize: 16,
    lineHeight: 24,
  },
});