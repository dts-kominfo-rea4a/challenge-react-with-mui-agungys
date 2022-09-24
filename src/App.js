import './App.css';

import {useState} from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import {Box,Grid,Card} from '@mui/material';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const[contact,setcontact] = useState(contactsJSON);

  const tambahkontak = (name,phone,email,photourl) => {
    const objdatacontact = {
      "name" : name,
      "phone": phone,
      "email": email,
      "photo": photourl
    }

    setcontact([...contact,objdatacontact]);
  }

  return (
    <div className="App">
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center">

          <Grid sx={{ m: 3 }}  >
            <ContactForm fntambahkontak={tambahkontak}/>
          </Grid>
          <Grid sx={{ m: 3 }} >
            <Card variant="outlined" sx={{ minWidth: 400, padding:1}} >
              {
                contact.map((isi) => (
                  <Contact data={isi}/>
                ))
              }
            </Card>
          </Grid>
      </Box>
    </div>
  );
};

export default App;
