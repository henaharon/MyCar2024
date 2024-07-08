import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Video from 'react-native-video';

const data = [
  {
    type: 'simple',
    headline: 'טיפים לנהיגה בטוחה עם ילדים',
    text: 'נהיגה בטוחה מחייבת כל נהג ונהג, על אחת כמה וכמה אם מדובר בהסעת ילדים בדרכים בין-עירוניות כי אז אפשר לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. לורם איפסום דולור סיט אמט, קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.',
    thumbnail: require('./components/images/SafeWithKids.png'),
    subHeadline: 'נסיעה עם ילדים בחו״ל',
    anotherText: 'לורם איפסום דולור סיט אמסינג אלית ט, קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.'
  },
  {
    type: 'photo',
    headline: 'לחץ אוויר משפר את נסיעתכם',
    text: 'איך לחץ אוויר משפיע על הנסיעה שלכם? לחץ אוויר הוא אחד הגורמים שהכי משפיעים על נסיעה בטוחה כחיג לאורח  דלחכ מהחשי אחרוםפ חעל מממש חיהמ לאוכח  לחכוי מחרמ לכישחאחיעל יאנשיל חאוטרמ צשלחרת לחעילרי חגואיחדמ.',
    thumbnail: require('./components/images/TirePressure.jpg'),
    detailedPhoto: require('./components/images/Punc.jpg'),
    detailHeadline: 'התמודדות עם תקר',
    detailText: 'הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק,הועניב היושבב שערש שמחויוחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמתרא התידם הכייר וק.'
  },
  {
    type: 'video',
    headline: 'ביטוח לרכב',
    text: 'האם אתם באמת יודעים הכל על ביטוחי רכב? טיפים שכל נהג או נהגת צריכים לדעת כדי להיות צרכנים חכמים בכל מה שנוגע לביטוחי רכב. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.',
    thumbnail: require('./components/images/Insurance.png'),
    subHeadline: 'איך לבחור ביטוח?', 
    anotherText: 'הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.'
  },
];

const Card = ({ item, onExpand }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onExpand(item)}>
      <Image source={item.thumbnail} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.headline}</Text>
      <Text style={styles.cardText} numberOfLines={2} ellipsizeMode='tail'>{item.text}</Text>
    </TouchableOpacity>
  );
};

const GuidesAndTips = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Tracks the playing state

  const handleExpand = (card) => {
    setExpanded(true);
    setCurrentCard(card);
    setIsPlaying(false); // Stop the video when changing cards
  };

  const handleBackPress = () => {
    setExpanded(false);
    setCurrentCard(null);
    setIsPlaying(false); // Ensure video stops when closing the modal
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>מדריכים וטיפים</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handleBackPress}>
          <Image style={styles.closeIcon} source={require('./components/images/exit.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.guidesTitle}>מדריכים</Text>
      <ScrollView>
        {data.map((item, index) => (
          <Card key={index} item={item} onExpand={handleExpand} />
        ))}
      </ScrollView>
      {expanded && (
        <Modal visible={expanded} onRequestClose={handleBackPress} animationType="slide">
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeModalButton} onPress={handleBackPress}>
              <Image style={styles.closeModalIcon} source={require('./components/images/arrowRight.png')} />
            </TouchableOpacity>
            <View style={styles.thumbnailContainer}>
              <Image source={currentCard?.thumbnail} style={styles.modalThumbnail} />
            </View>
            <Text style={styles.modalTitle}>{currentCard?.headline}</Text>
            <Text style={styles.modalText}>{currentCard?.text}</Text>

            {currentCard?.type === 'video' && (
              <View style={styles.videoContainer}>
                <Video
                  source={require('./components/images/CarInsurance.mp4')}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="cover"
                  repeat={true}
                  style={styles.video}
                  paused={!isPlaying}
                  onError={(e) => console.log('Video Error: ', e)}
                />
                <TouchableOpacity 
                  style={[styles.playPauseButton, !isPlaying ? styles.show : styles.hide]} 
                  onPress={togglePlayback}
                >
                  <Image
                    style={styles.controlIcon}
                    source={isPlaying ? require('./components/images/pause.png') : require('./components/images/playButton.png')}
                  />
                </TouchableOpacity>
              </View>
            )}

            {currentCard?.subHeadline && <Text style={styles.modalSubTitle}>{currentCard.subHeadline}</Text>}
            {currentCard?.anotherText && <Text style={styles.modalSubText}>{currentCard.anotherText}</Text>}

            {currentCard?.type === 'photo' && (
              <>
                <Image source={currentCard?.detailedPhoto} style={styles.modalImage} />
                <Text style={styles.modalSubTitle}>{currentCard?.detailHeadline}</Text>
                <Text style={styles.modalSubText}>{currentCard?.detailText}</Text>
              </>
            )}
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  guidesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
    padding: 10,
    backgroundColor: 'white',
    width: '100%'
  },
  closeButton: {
    // Optional: padding or other styling if needed
  },
  closeIcon: {
    width: 28,
    height: 28,
  },
  card: {
    borderRadius: 20,
    margin: 10,
    padding: 12,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    width: '90%',
    alignSelf: 'center',
    height: 250,
  },
  cardImage: {
    borderRadius: 20,
    width: '100%',
    height: 140,
    marginBottom: 10,
  },
  cardTitle: {
    textAlign: 'right',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    color: 'black',
    fontSize: 16,
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  modalTitle: {
    margin: 10,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalText: {
    margin: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 18,
  },
  modalImage: {
    borderRadius: 20,
    width: '90%',
    height: 200,
    alignSelf: 'center',
    margin: 10,
  },
  thumbnailContainer: {
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    backgroundColor: 'transparent',
  },
  modalThumbnail: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  closeModalButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 1,
    padding: 10,
  },
  closeModalIcon: {
    width: 35,
    height: 35,
  },
  videoContainer: {
    alignSelf: 'center',
    width: '90%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
    padding: 10,
    zIndex: 2,
  },
  controlIcon: {
    width: 50,
    height: 50,
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  modalSubTitle: {
    margin: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  modalSubText: {
    margin: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 16,
  },
});

export default GuidesAndTips;
