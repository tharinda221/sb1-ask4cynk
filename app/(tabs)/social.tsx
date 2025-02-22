import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const posts = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    },
    content: 'Just crushed my morning workout! 💪 New personal best on deadlifts: 185lbs x 5 reps! #FitnessGoals #Progress',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800',
    likes: 24,
    comments: 6,
    time: '2h ago',
  },
  {
    id: 2,
    user: {
      name: 'Mike Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    },
    content: 'Beautiful morning for a run by the beach! 🏃‍♂️ 5 miles done, feeling energized for the day ahead.',
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800',
    likes: 18,
    comments: 3,
    time: '4h ago',
  },
];

export default function SocialScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.addStoryCard}>
            <View style={styles.addStoryButton}>
              <Ionicons name="add" size={24} color="#fff" />
            </View>
            <Text style={styles.addStoryText}>Add Story</Text>
          </View>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <View key={index} style={styles.storyCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=200' }}
                style={styles.storyImage}
              />
              <Text style={styles.storyName}>User {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.posts}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
              <View style={styles.postHeaderText}>
                <Text style={styles.userName}>{post.user.name}</Text>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <Pressable style={styles.moreButton}>
                <Ionicons name="ellipsis-horizontal" size={20} color="#8E8E93" />
              </Pressable>
            </View>
            <Text style={styles.postContent}>{post.content}</Text>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <View style={styles.postActions}>
              <Pressable style={styles.actionButton}>
                <Ionicons name="heart-outline" size={24} color="#8E8E93" />
                <Text style={styles.actionText}>{post.likes}</Text>
              </Pressable>
              <Pressable style={styles.actionButton}>
                <Ionicons name="chatbubble-outline" size={24} color="#8E8E93" />
                <Text style={styles.actionText}>{post.comments}</Text>
              </Pressable>
              <Pressable style={styles.actionButton}>
                <Ionicons name="share-outline" size={24} color="#8E8E93" />
              </Pressable>
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
  storiesContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2d30',
  },
  addStoryCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  addStoryButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addStoryText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  storyCard: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  storyName: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  posts: {
    padding: 20,
  },
  postCard: {
    backgroundColor: '#2c2d30',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  postHeader: {
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
  postHeaderText: {
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
  postContent: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postActions: {
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