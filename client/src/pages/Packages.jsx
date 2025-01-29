import Package from "../components/Package.jsx";

export default function App() {
  return <>
    <h1>Packages</h1>
    <p>All packages!</p>
    <section id="packages">
      <Package
        title='Natural Package'
        collection='natural'
      />
      <Package
        title='Colorful Package'
        collection='colorful'
      />
      <Package
        title='Pink Package'
        collection='pink'
      />
    </section>
  </>
}
