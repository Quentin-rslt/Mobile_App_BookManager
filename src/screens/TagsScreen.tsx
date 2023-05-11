import { View, Text, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import TagCard from '../components/cards/TagCard'
import TagsStyles from '../styles/screens/TagsStyles'
import TopBar from '../components/Inputs/TopBar'
import Tag from '../Common/Class/Tag'
import { COLORS } from '../Common/CommonColors'
import TextIconButton from '../components/Buttons/TextIconButton'
import TagService from '../Common/services/TagService'

export default function TagsScreen({ navigation } : any) {

    const tagService:TagService = new TagService;

    const [tags, setTags] = useState<Tag[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation])

    const onRefresh = useCallback(async () => {
        try{
            await tagService.fetchTags();
            setTags(tagService.tags);
            setIsLoading(false);
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des tags" , ToastAndroid.CENTER);
        }
    }, []);

    const onChangeSearch = (text : string) => {
        const filteredTags:Tag[] = tagService.tags.filter((tag) => {
            return tag.textTag.toUpperCase().includes(text.toUpperCase());
        });
        setTags(filteredTags);
    };

    const onClickAddTag = () => {
        alert("add tag");
    };

    const renderHeader = () => {
        return(
            <TitleScreen title={'Tags'}/>
        )
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar onChangeSearch={onChangeSearch}/>
            <View style={CommonStyles.content}>
                <FlatList style={CommonStyles.flatListContainer} 
                    ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun tag n'a été trouvé"}</Text>}
                    columnWrapperStyle={TagsStyles.columnWrapperStyle}
                    contentContainerStyle = {TagsStyles.tagsContainer}
                    initialNumToRender={2}
                    numColumns={2}
                    data={tags}
                    renderItem={({item}) => <TagCard tag={item} navigation={navigation}/>}
                    keyExtractor={item => item.idTag.toString()}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                    ListHeaderComponent={renderHeader}
                />
                <View style={CommonStyles.buttonContainer}>
                    <TextIconButton callBack={onClickAddTag} size={22} text={'Ajouter un tag'} nameIcon={'plus'} containerStyle={CommonStyles.addButton} color={COLORS.background}/>
                </View>
            </View>
        </View>
    ) 
}