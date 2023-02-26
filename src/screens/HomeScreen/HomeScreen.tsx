import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import useImage from '../../hooks/useImage'
import { getWallpapers, request } from '../../constants/api'
import ImageContext from '../../context'
import styles from './styles'
import Body from '../../components/Body'
import RenderImage from '../../components/RenderImage'

const HomeScreen = () => {
  const {
    setImages,
    imageArray,
    setChoosenImages,
    removeChoosenImage
  } = useContext(ImageContext)

  const [selectedImages, setSelectedImages] = useState([])
  const [imageIndecies, setImageIndecies] = useState([])
  const getImages = async () => {
    const result = await useImage()
    setImages(result)
  }
  useEffect(() => {
    getImages()
  }, [])



  const indexCompare = (index: any) => imageIndecies.includes(index)

  const itemOnPress = ({ item, index }: { item: any, index: any }) => {
    if (!selectedImages.includes(item)) {
      setSelectedImages([...selectedImages, item])
      setImageIndecies([...imageIndecies, index])
      setChoosenImages({ index, item })
    } else {
      setSelectedImages([...selectedImages.filter((image) => image !== item)])
      setImageIndecies([...imageIndecies.filter((i) => i !== index)])
      removeChoosenImage({ index })
    }
  }

  const renderItem = ({ item, index }: { item: any, index: any }) => {
    return (
      <RenderImage
        item={item}
        index={index}
        itemOnPress={itemOnPress}
        indexCompare={indexCompare}
      />
    )
  }

  const listFooterComponent = () => {
    return (
      <View style={styles.footerComponentsStyle} />
    )
  }
  return (
    <Body>
      <FlatList
        key={1}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={imageArray}
        renderItem={({ item, index }) => renderItem({ item, index })}
        ListFooterComponent={listFooterComponent}
      />
    </Body>

  );
}

export default HomeScreen