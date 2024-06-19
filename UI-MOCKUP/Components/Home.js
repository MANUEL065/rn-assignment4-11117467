import {View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, TextInput, FlatList, ScrollView,} from 'react-native';
import Cards from "./Cards";
import JobCard from './JobCard';

export default function Home({props}) {

  console.log(props);

    return(
      
        <SafeAreaView style={styles.container}>
          <ScrollView>
             <View style={styles.body}>
              <View style={styles.header}>
                <View style={styles.upperHeader}><Text style={styles.textHeader1}>Manuel Mensah</Text></View>
              <View style={styles.lowerHeader}><Text style={styles.textHeader2}>Manuel@gmail.com</Text></View>
              </View>
              <View><Image source={require("../assets/Ellipse.png")} style={styles.profileContainer}/>
             <View>
              <View><Image source={require("../assets/Ellipse 798.png")} style={styles.DotContainer} />
              <Image source={require("../assets/Ellipse 767.png")} style={styles.Dot}/>
      </View>
      </View>
      </View> 

              <View style={styles.search}>
                <View style={styles.searchContainer}>
                  <View style={styles.searchIcon}><Image source={require("../assets/Search.png")} />
                    <TextInput style={styles.searchText} placeholder='Search a job or position'></TextInput>
                  </View>
                </View>
                <View style={styles.EnterContainer}><Image source={require("../assets/Rectangle 10.png")} />
                <View style={styles.Enter}><Image source={require("../assets/Enter.png")} /></View>
                </View>
              </View>
                 
                <View><Text style={styles.leftText}>Featured Jobs</Text></View>
                <View><Text style={styles.rightText}>See all</Text></View>

               
                 <View>
                    <FlatList data={Cards} renderItem={({ item }) => (
                      
                      <View style={[styles.cardItem, {backgroundColor: item.color }]} >
                    <Image style={styles.imageBlock}  source={item.images} /><Image style={styles.cardImage} source={item.image} /><Image style={styles.imageContainer}  source={item.imagess} />
                    <Text styles={styles.card}>{item.card}</Text>
                      <Text style={styles.cardTitle}>{item.cardTitle}</Text>
                      <Text style={styles.cardName}>{item.cardName}</Text>
                      <Text style={styles.cardAmount}>{item.cardAmount}</Text>
                      <Text style={styles.cardLocation}>{item.cardLocation}</Text></View>
                    )} keyExtractor={(item) => item.id}  horizontal 
                    showsHorizontalScrollIndicator={false}/>
                </View>
                <View><Text style={styles.jobText}>Popular Jobs</Text></View>
                <View><Text style={styles.jobTexts}>See all</Text></View>

            <View >
              <FlatList data={JobCard} renderItem={({item}) => ( 
                <View style={[styles.jobItem, {backgroundColor: item.color}]} >
                  <Image style={styles.jobImage} source={item.image} />
                  <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                  <Text style={styles.jobName}>{item.jobName}</Text>
                  <Text style={styles.jobAmount}>{item.jobAmount}</Text>
                  <Text style={styles.jobLocation}>{item.jobLocation}</Text></View>
              )} keyExtractor={(item) => item.id} contentContainerStyle={styles.flatListContainer}
                 />
             </View>
             </View>
             </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "#FAFAFD",
        flex: 1
    },
    header: {
       width: 264,
       height: 55,
       top: 34,
       left: 28,
    },
    upperHeader: {
          width: 254,
          height: 36,
    },
 
    textHeader1: {
      fontFamily: "Poppins",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "36px",

    },
    lowerHeader: {
       width: 254,
       height: 24,
       top: "95px"
    },
  textHeader2: {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#95969D",
    letterSpacing: "-0.015em",
  },
  profileContainer: {
     width: 58,
     height: 58,
     top: -11,
     left: 320
  },
DotContainer: {
 height: 16,
 width: 16,
 background: "#FAFAFD",
 top: -67,
 left: 360
},
  Dot: {
    width: 8,
    height: 8,
    top: -78,
    left: 364,

  },
  search: {
     width: 327,
     height: 48,
     top:18,
     left: 24
  },
  searchContainer: {
     width: 272,
     height: 48,
     borderRadius: 12,
     backgroundColor: "#F2F2F3"
  },
  searchText: {
    width: 174,
    height: 23,
    top: -23,
    left: 30,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.5,
    textAlign: "left",
  },
  searchIcon: {
    width: 20,
    height: 20,
    top: 14,
    left: 24,
    opacity: 0.5,
    padding: 2.32
  },
  EnterContainer: {
     height: 48,
     width: 48,
     left: 300,
     top: -47,
  },
  Enter: {
   top: -38,
   left: 12,
   rotation: -90
  },
  leftText: {
    width: 114,
    height: 21,
    top: 58,
    left: 24,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.8,
  },
  rightText: {
     width: 42,
     height: 17,
     top: 42,
     left: 320,
     color: "#95969D",
     lineHeight: 16.8,
     fontWeight: "400",
     fontSize: 14
  },
  card: {
    width: 280,
    height: 186,
    top: 292,
    left: 24,
    borderRadius: 24,
    opacity: 0.06,
     justifyContent: "space-between"
  },
  cardItem: {
    width: 310,
    height: 260,
    top: 65,
    left: 18,
    borderRadius: 24,
    margin: 10,

  },
  
  cardTitle: {
      width: 145,
      height: 21,
      top: -52,
      left: 94,
      fontSize: 16,
      fontWeight: "600",
      lineHeight: 20.8,
     color: "#fff"
     
  },
  cardName: {
    width: 68,
    height: 21,
    top: -58,
    left: 94,
    opacity: 0.75,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#fff"
  },
  cardAmount: {
   top: 22,
   left: 31,
   fontSize: 15,
   lineHeight: 54,
   fontWeight: "500",
   color: "#fff",

  },
  cardLocation: {
     width: 102,
     height: 24,
     top: -20,
     left: 185,
     fontSize: 15,
     fontWeight: "500",
     lineHeight: 24,
     color: "#fff"

  },
  cardImage: {
    width: 26,
    height: 30.57,
    top: 2,
    left: 38,
  },
  imageBlock: {
    left: 26,
    top: 40
  },
jobText: {
 width: 105,
 height: 21,
 top: 20,
left: 26,
fontSize: 16,
fontWeight: "600",
lineHeight: 20.8
},
jobTexts: {
  width: 42,
  height: 21,
  left: 300,
  color: "#95969D"
},
jobItem: {
  width: 370,
  height: 100,
  top: 5,
  left: 4,
  borderRadius: 24,
  margin: 10,

},
jobImage: {
   width: 41.26,
   height: 43,
   left: 49,
   top: 260
},
flatListContainer: {
  padding: 20,
},
jobTitle: {
  width: 124,
  height: 18,
  top: -28,
  left: 107,
  fontSize: 16,
  fontWeight: "600",
  lineHeight: 18.2
},
jobName: {
  width: 80,
  height: 21,
  left: 107,
  top: -10,

  lineHeight: 20.8,
  fontWeight: "400",
  color: "#95969D"
},
jobAmount: {
 fontSize: 12,
 fontWeight: "400",
 lineHeight: 19.2,
 width: 62,
 height: 19,
 left: 256,
 top: -65,
},
jobLocation: {
   width: 120,
   height: 21,
  left: 238,
  top: -48,
  lineHeight: 20.8,
  
},
jobImage: {
   width: 48.26,
   height: 48,
   left: 44,
   top: 26
}


})
 

// width: 41.26px;
// height: 43px;
// top: 577px;
// left: 49px;
// padding: 0px;
// gap: 0px;
// opacity: 0px;













