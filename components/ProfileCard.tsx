import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileCard({ name, jobTitle, imageUrl }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

type ProfileCardProps = {
  name: string;
  jobTitle: string;
  imageUrl: string;
};

export default function ProfileCard({ name, jobTitle, imageUrl }: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
