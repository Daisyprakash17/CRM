import logo from './logo.svg';
import './App.css';
import AuthRouter from './router/AuthRouter';
import AppRouter from './router/AppRouter';
import HeaderContent from './apps/Header/HeaderContainer';
import Navigation from './apps/Navigation/NavigationContainer';

function App() {
  // const { isLoggedIn } = useSelector(selectAuth);
  const isLoggedIn=false;

  if (!isLoggedIn)
  return (
    // <Localization>
      <AuthRouter />
    // </Localization>
  );
else {
  return(
    // <Localization>
   // <AppContextProvider>
    //  <Suspense fallback={<PageLoader />}>
        // header
        // navigtation panel
      <>
        <HeaderContent/>
        <Navigation/>
        <AppRouter />
    </>
   //   </Suspense>
   // </AppContextProvider>
  //</Localization>
  )
  
}

}

export default App;
