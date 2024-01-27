import logo from './logo.svg';
import './App.css';
import AuthRouter from './router/AuthRouter';
import AppRouter from './router/AppRouter';

function App() {
  // const { isLoggedIn } = useSelector(selectAuth);
  const isLoggedIn=true;

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
        <AppRouter />
   //   </Suspense>
   // </AppContextProvider>
  //</Localization>
  )
  
}

}

export default App;
