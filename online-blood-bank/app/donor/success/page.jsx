import { Page, Text, View, Document, PDFDownloadLink } from '@react-pdf/renderer';
import NavBar from '../../../components/NavBar';

const MyDocument = ({ schedule }) => (
  <Document>
    <Page>
      <View>
        <Text>Appointment Schedule</Text>
        <Text>Time: {schedule.time}</Text>
        <Text>Location: {schedule.location}</Text>
        <Text>Token ID: {schedule.token}</Text>
      </View>
    </Page>
  </Document>
);

export default function SuccessPage() {
  const schedule = {
    time: "10:00 AM",
    location: "City Hospital",
    token: "12345"
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NavBar />
      <h1 className="text-3xl mb-4">Success! Appointment confirmed</h1>
      <PDFDownloadLink document={<MyDocument schedule={schedule} />} fileName="appointment.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download Appointment Details')}
      </PDFDownloadLink>
    </div>
  );
}
