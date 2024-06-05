import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Open Sans',
  src: `http://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3aCWcynf_cDxXwCLxiixG1c.ttf`,
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
    fontSize: 16,
    fontFamily: 'Open Sans',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const PdfDocument = ({ content }) => {
  const parts = content.split('\\n');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {parts.map((part, index) => (
            part.split(/\*\*(.*?)\*\*/g).map((subPart, subIndex) => (
              <Text key={`${index}-${subIndex}`} style={subIndex % 2 === 0 ? styles.textSmall : styles.bold}>{subPart}</Text>
            ))
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;