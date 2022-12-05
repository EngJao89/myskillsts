import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
} 
export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkills}
      {...rest}
    >
      <Text style={styles.textSkills}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    marginVertical: 10
  },
  textSkills: {
    color: '#FFF',
    backgroundColor: '#1F1E25',
    padding: 15,
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 15
  }
});