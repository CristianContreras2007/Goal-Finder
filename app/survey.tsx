import React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

// components
import TopicButtons from '@/components/TopicButtons';

export default function Survey() {
    return (

    <View>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Text style = {styles.title}>Choose Your Program</Text>  
            <Text style = {styles.description}>Select Programs you think you'd be interested in. 
                You can always change this from your profile, so don't stress!</Text>
            <Text style = {styles.fitness}>Fitness</Text>
            <ScrollView 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}> 
                <TopicButtons imageURI = {require('@/assets/images/Soccer.png')} style = {styles.imagesFitness}/>
                <TopicButtons imageURI= {require('@/assets/images/Basketball.png')} style = {styles.imagesFitness}/>
                <TopicButtons imageURI = {require('@/assets/images/Football.png')} style = {styles.imagesFitness}/>
                <TopicButtons imageURI = {require('@/assets/images/Track.png')} style = {styles.imagesFitness}/>
                <TopicButtons imageURI = {require('@/assets/images/Tennis.png')} style = {styles.imagesFitness}/>
                <TopicButtons imageURI={require('@/assets/images/Tennis.png')} style = {styles.imagesFitness}/>
            </ScrollView>
            <Text style = {styles.fitness}>Art</Text>
            <ScrollView 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}>
                <TopicButtons imageURI = {require('@/assets/images/Drawing.png')} style = {styles.imagesArt}/>
                <TopicButtons imageURI = {require('@/assets/images/Photography.png')} style = {styles.imagesArt}/>
                <TopicButtons imageURI = {require('@/assets/images/Drama.png')} style = {styles.imagesArt}/>
                <TopicButtons imageURI = {require('@/assets/images/DigitalArt.png')} style = {styles.imagesArt}/>
                <TopicButtons imageURI = {require('@/assets/images/Dancing.png')} style = {styles.imagesArt}/>
            </ScrollView>
            <Text style = {styles.fitness}>Tech</Text>
            <ScrollView 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}>
                <TopicButtons imageURI = {require('@/assets/images/Gaming.png')} style = {styles.imagesTech}/>
                <TopicButtons imageURI = {require('@/assets/images/Coding.png')} style = {styles.imagesTech}/>
                <TopicButtons imageURI = {require('@/assets/images/Robotics.png')} style = {styles.imagesTech}/>
                <TopicButtons imageURI = {require('@/assets/images/VideoEditing.png')} style = {styles.imagesTech}/>
                <TopicButtons imageURI = {require('@/assets/images/MusicProduction.png')} style = {styles.imagesTech}/>
            </ScrollView>
            <Pressable style = {styles.continue}
            onPress = {() => router.replace('/home')}>
                 <Text style = {styles.text}>Done</Text>
            </Pressable>
    </ScrollView>
</View>
    )
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: 'center',
      },

    content: { 
    },

    title: {
        width: 346,
        height: 44,
        fontSize: 29,
        fontWeight: '600',
        marginBottom: 10,
        marginVertical: 50,
        textAlign: 'center'
    },

    description: {
        width: 350,
        height: 100,
        fontWeight: '300',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        alignItems: 'center',
        padding: 16,
    },

    fitness: {
        fontWeight: '700',
        fontSize: 20,
        height: 28,
        marginBottom: 10,
    },

    imagesFitness: {
        marginHorizontal: 10,
        marginBottom: 24,
    },

    imagesArt: {
        marginHorizontal: 10,
        marginBottom: 24,
    },

    imagesTech: {
        marginHorizontal: 10,
        marginBottom: 24,
    },

    continue: {
    width: '90%',
    height: 40,
    backgroundColor: '#2C2C2C',
    borderRadius: 8, 
    marginBottom: 20,
    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        paddingTop: 8,
        textAlign: 'center',
    },

    imagePressed: {
        
    }
}

);
    
