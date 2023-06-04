import React, {useState} from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import globalStyles from '../styles/global.js';

import Button from '../components/button.jsx';
import ArticleThumbnail from '../components/articleThumbnail.jsx';

const newsItemExample = [
    {
        "source": {
            "id": null,
            "name": "sourceName"
        },
        "author": "Author Name",
        "title": "Article Title",
        "description": "Article Description",
        "url": "uri",
        "urlToImage": "uri",
        "publishedAt": "Publish Date",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "sourceName"
        },
        "author": "Author Name2",
        "title": "Article Title2",
        "description": "Article Description",
        "url": "uri",
        "urlToImage": "uri",
        "publishedAt": "Publish Date1",
        "content": null
    },
];


const Home = () => {
    const [newsItem, setNewsItem] = useState();
    
    const getData = async() => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c185ff7708e44dea7b0f22f482203d5');
    const parsedResponse = await response.json();
    const articles = parsedResponse.articles;
    setNewsItem(articles);
    // newsItem = articles
}

    return (
        <View style={globalStyles.container}>
            
            <FlatList
                data={newsItem}
                renderItem={({ item }) => <ArticleThumbnail item={item} />}
            />
            <Button onPress={() => { console.log("pressed"); getData();  } } text={'Press me'}/>
            {/* <Button onPress={getData} /> */}
        </View>
    )
}


export default Home;