import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  textSmall: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  bold: {
    fontSize: 20,
    fontFamily: 'Lato Bold',
  },
});

const PdfDocument = ({ content }) => {
  const mainParts = content.split(/\*\*(.*?)\*\*/g);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {mainParts.map((part, index) => (
            <Text key={index} style={index % 2 === 0 ? styles.textSmall : styles.bold}>{part}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument