
import Layout from "@/layouts/Layout";

const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello, welcome to your first Inertia app!</p>
    </>
  )
}

Home.layout = (page: React.ReactElement) => <Layout children={page} title="Home" />

export default Home
