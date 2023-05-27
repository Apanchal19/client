import './App.css';
import CustomerInfo from './components/CustomerInfo'
import Header from './components/Header'
import AdditionalInfo from './components/AdditionalInfo';
import AdminToComplete from './components/AdminToComplete';
import SubmitButton from './components/SubmitButton';
import CustomerForm from './components/CustomerForm';

function App() {
  return (
      <div>
        <>
        {/* <Header />
        <CustomerInfo />
        <AdditionalInfo />
        <AdminToComplete />
        <SubmitButton /> */}
        <CustomerForm/>
        </>
     </div>
  );
}

export default App;
