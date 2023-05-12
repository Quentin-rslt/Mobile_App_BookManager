import { View, Text, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import TagCard from '../components/cards/TagCard'
import TagsStyles from '../styles/screens/TagsStyles'
import TopBar from '../components/Inputs/TopBar'
import Tag from '../Common/Class/Tag'
import { COLORS } from '../Common/CommonColors'
import TextIconButton from '../components/Buttons/TextIconButton'
import Client from '../Common/Class/Client'

export default function TagsScreen({ route } : any) {

    const client:Client = route.params.client;

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onRefresh = useCallback(async () => {
        try{
            setIsLoading(true);
            await client.tagService.fetchTags();
            setIsLoading(false);
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des tags" , ToastAndroid.CENTER);
        }
    }, []);

    const onChangeSearch = (text : string) => {
        const filteredTags:Tag[] = client.tagService.tags.filter((tag) => {
            return tag.textTag.toUpperCase().includes(text.toUpperCase());
        });
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
                    data={client.tagService.tags}
                    renderItem={({item}) => <TagCard tag={item}/>}
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