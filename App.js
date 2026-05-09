import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';

// HARDCODED SAMPLE DATA - works without any backend
const SAMPLE_JOBS = [
  {
    id: '1',
    title: 'Software Engineer',
    employer: 'Tech Corp Canada',
    city: 'Toronto',
    province: 'ON',
    sponsorshipOffered: true,
    lmiaApproved: true
  },
  {
    id: '2',
    title: 'Registered Nurse',
    employer: 'Vancouver General Hospital',
    city: 'Vancouver',
    province: 'BC',
    sponsorshipOffered: true,
    lmiaApproved: true
  },
  {
    id: '3',
    title: 'Construction Supervisor',
    employer: 'Maple Builders',
    city: 'Calgary',
    province: 'AB',
    sponsorshipOffered: true,
    lmiaApproved: false
  },
  {
    id: '4',
    title: 'Customer Service Manager',
    employer: 'Global Logistics Inc',
    city: 'Mississauga',
    province: 'ON',
    sponsorshipOffered: true,
    lmiaApproved: true
  },
  {
    id: '5',
    title: 'Chef',
    employer: 'Blue Mountain Resort',
    city: 'Collingwood',
    province: 'ON',
    sponsorshipOffered: true,
    lmiaApproved: false
  },
  {
    id: '6',
    title: 'Truck Driver',
    employer: 'Swift Transport',
    city: 'Edmonton',
    province: 'AB',
    sponsorshipOffered: true,
    lmiaApproved: true
  }
];

export default function App() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" color="#0066CC" />
        <Text>Loading jobs...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🇨🇦 Visa Sponsorship Jobs</Text>
        <Text style={styles.headerSubtitle}>Canada • LMIA • Work Permit</Text>
      </View>

      <FlatList
        data={SAMPLE_JOBS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <View style={styles.sponsorBadge}>
                <Text style={styles.sponsorText}>🟢 Sponsorship</Text>
              </View>
            </View>
            <Text style={styles.companyName}>{item.employer}</Text>
            <Text style={styles.location}>📍 {item.city}, {item.province}</Text>
            {item.lmiaApproved && (
              <View style={styles.lmiaContainer}>
                <Text style={styles.lmiaText}>✅ LMIA Approved</Text>
              </View>
            )}
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0066CC',
    paddingTop: 50,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginTop: 5,
  },
  listContent: {
    padding: 15,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
    color: '#1A1A2E',
  },
  sponsorBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  sponsorText: {
    color: '#2E7D32',
    fontSize: 11,
    fontWeight: '600',
  },
  companyName: {
    fontSize: 15,
    color: '#4A5568',
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 10,
  },
  lmiaContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
  },
  lmiaText: {
    fontSize: 13,
    color: '#0066CC',
    fontWeight: '500',
  },
});
