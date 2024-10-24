import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LandlordReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      user: 'Isaac Zwane',
      rating: 3,
      comment: 'Nice place, but the wifi is very bad.',
      replies: [],
    },
    {//
      user: 'Ntsele Melusi Ivan',
      rating: 5,
      comment: 'Great place, close to UWC. The room was neat and well-maintained.',
      replies: [],
    },
  ]);

  const [replyText, setReplyText] = useState('');

  const handlePostReply = (index) => {
    if (replyText.trim() !== '') {
      const updatedReviews = [...reviews];
      updatedReviews[index].replies.push(replyText);
      setReviews(updatedReviews);
      setReplyText('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Tenant Reviews</Text>
        {reviews.map((review, index) => (
          <View key={index} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Ionicons name="person-circle-outline" size={40} color="#00509E" />
              <View style={styles.reviewInfo}>
                <Text style={styles.reviewUser}>{review.user}</Text>
                <View style={styles.ratingContainer}>
                  {Array(review.rating).fill().map((_, i) => (
                    <Ionicons key={i} name="star" size={16} color="#FFD700" />
                  ))}
                  {Array(5 - review.rating).fill().map((_, i) => (
                    <Ionicons key={i} name="star-outline" size={16} color="#FFD700" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.reviewText}>{review.comment}</Text>
            <View style={styles.replySection}>
              {review.replies.length > 0 && (
                <View style={styles.replyList}>
                  {review.replies.map((reply, rIndex) => (
                    <Text key={rIndex} style={styles.replyText}>Landlord: {reply}</Text>
                  ))}
                </View>
              )}
              <TextInput
                placeholder="Write a reply..."
                style={styles.replyInput}
                value={replyText}
                onChangeText={setReplyText}
              />
              <TouchableOpacity style={styles.replyButton} onPress={() => handlePostReply(index)}>
                <Ionicons name="send" size={16} color="#FFF" />
                <Text style={styles.replyButtonText}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 10,
    paddingTop: StatusBar.currentHeight || 40, // Adding paddingTop
  },
  scrollView: {
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 15,
    textAlign: 'center',
  },
  reviewCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewInfo: {
    marginLeft: 10,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00509E',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  replySection: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  replyInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    fontSize: 14,
    backgroundColor: '#FFF',
  },
  replyButton: {
    backgroundColor: '#00509E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  replyButtonText: {
    color: '#FFF',
    marginLeft: 5,
    fontSize: 14,
  },
  replyText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  replyList: {
    marginBottom: 10,
  },
});

export default LandlordReviewsPage;
