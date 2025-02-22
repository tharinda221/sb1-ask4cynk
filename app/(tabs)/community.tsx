import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const discussions = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    title: 'Nordic Tech Stocks Analysis',
    content: 'What are your thoughts on the current valuations of Nordic tech companies? Looking at NOKIA and ERICSSON specifically...',
    tags: ['Stocks', 'Tech', 'Analysis'],
    likes: 24,
    comments: 12,
    time: '2h ago',
  },
  {
    id: 2,
    user: {
      name: 'Erik Anderson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    title: 'Sustainable Energy Investment Opportunities',
    content: 'The Nordic region is leading in renewable energy. Which companies are you watching in this sector?',
    tags: ['ESG', 'Energy', 'Growth'],
    likes: 18,
    comments: 8,
    time: '4h ago',
  },
];

export default function CommunityScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Investment Community</Text>
        <Pressable style={styles.newPostButton}>
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={styles.newPostButtonText}>New Discussion</Text>
        </Pressable>
      </View>

      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Stocks', 'ETFs', 'Analysis', 'News', 'Discussion'].map((category, index) => (
            <Pressable
              key={index}
              style={[styles.categoryChip, index === 0 && styles.activeCategoryChip]}>
              <Text
                style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.discussionsContainer}>
        {discussions.map((discussion) => (
          <Pressable key={discussion.id} style={styles.discussionCard}>
            <View style={styles.discussionHeader}>
              <Image source={{ uri: discussion.user.avatar }} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{discussion.user.name}</Text>
                <Text style={styles.postTime}>{discussion.time}</Text>
              </View>
              <Pressable style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={20} color="#8E8E93" />
              </Pressable>
            </View>
            
            <View style={styles.discussionContent}>
              <Text style={styles.discussionTitle}>{discussion.title}</Text>
              <Text style={styles.discussionText}>{discussion.content}</Text>
              
              <View style={styles.tagsContainer}>
                {discussion.tags.map((tag, index) => (
                  <View key={index} style={styles.tagChip}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.discussionActions}>
              <Pressable style={styles.actionButton}>
                <Ionicons name="heart-outline" size={24} color="#8E8E93" />
                <Text style={styles.actionText}>{discussion.likes}</Text>
              </Pressable>
              <Pressable style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#8E8E93" />
                <Text style={styles.actionText}>{discussion.comments}</Text>
              </Pressable>
              <Pressable style={styles.actionButton}>
                <Ionicons name="share-outline" size={24} color="#8E8E93" />
              </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  newPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  newPostButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: '#2c2d30',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activeCategoryChip: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    color: '#8E8E93',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#fff',
  },
  discussionsContainer: {
    padding: 20,
  },
  discussionCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  discussionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    color: '#8E8E93',
    fontSize: 14,
  },
  moreButton: {
    padding: 4,
  },
  discussionContent: {
    padding: 16,
    paddingTop: 0,
  },
  discussionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  discussionText: {
    color: '#8E8E93',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagChip: {
    backgroundColor: '#3c3d40',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
  },
  discussionActions: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#3c3d40',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    color: '#8E8E93',
    fontSize: 14,
    marginLeft: 6,
  },
});