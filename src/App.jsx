import './App.css';
import { useState } from 'react';
import { ContactList, ChengeForm, SearchBox, ContactForm } from 'components';
import { useSelector } from 'react-redux';
import { selectEdit } from './redux/selecrors';

const App = () => {
  const isEdit = useSelector(selectEdit);

  //  const cancelEdit = () => setIsEdit(false);

  // const editing = contact => {
  //   setContacts(prev =>
  //     prev.map(item =>
  //       item.id === changeContact.id ? { ...contact, id: item.id } : item
  //     )
  //   );

  //   cancelEdit();
  // };

  return (
    <div className="wrapper">
      <h1 className="title">Phonebook</h1>
      <section className="tools">
        {isEdit ? <ChengeForm /> : <ContactForm />}
        <SearchBox />
      </section>
      <ContactList />
    </div>
  );
};

export default App;
