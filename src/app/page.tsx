import Image from "next/image";
import Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
    <body>
    <header>
      <h1>Search for things here</h1>
      {/* <SearchBar/> */}
    </header>
    <main>
      {/* <Card> */}
      <h2>Cards</h2>
      <Button variant="outline-primary">Added button</Button>{' '}
    </main>
    <aside>
      {/* <Subreddits/> */}
    </aside>
    </body>
    </>
  );
}
