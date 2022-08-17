import Layout from "../../components/Layout";

export default function ({ coin }) {
  return (
    <Layout>
      <div className="flex border-8 border-gray-300 rounded m-auto mt-56 p-20 w-1/3 justify-evenly box-border">
        <img src={coin.coin.icon} alt={coin.coin.symbol} className="w-1/3" />
        <div className="ml-10">
          <h2>Name: {coin.coin.name}</h2>
          <p>Symbol: {coin.coin.symbol} </p>
          <p>Price: {coin.coin.price} </p>
          <p>Price Change 1H: {coin.coin.priceChange1h} %</p>
          <p>Price Change 1D: {coin.coin.priceChange1d} %</p>
          <p>Price Change 1W: {coin.coin.priceChange1w} %</p>
          <p>Twitter: {coin.coin.twitterUrl} </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins/${params.id}`
  );
  const coin = await response.json();

  return {
    props: { coin }, // will be passed to the page component as props
  };
}
