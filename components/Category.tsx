import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Category = ({ title }: any) => {

  return (
    <TouchableOpacity style={styles.categoryButton} >
          <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    categoryButton: {
    backgroundColor: '#ffff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: '#C6D0D7'
  },
  categoryText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 19
  },
})