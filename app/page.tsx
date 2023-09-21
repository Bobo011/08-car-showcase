// Import necessary components and data from external files/modules.
import { CustomFilter, CarCard, Hero, SearchBar, ShowMore } from "@/components"; // Import custom components from '@/components' directory.
import { fuels, yearsOfProduction } from "@/constants"; // Import fuel and yearsOfProduction data from '@/constants'.
import { HomeProps } from "@/types"; // Import HomeProps type from '@/types'.
import { fetchCars } from "@/utils"; // Import fetchCars function from '@/utils'.

// Define the Home function component that receives searchParams as a prop.
export default async function Home({ searchParams }: HomeProps) {
  // Fetch cars based on search parameters using the fetchCars function.
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  // Check if the fetched data is empty.
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  // Render the main content of the home page.
  return (
    <main className="overflow-hidden">
      <Hero /> {/* Render the Hero component at the top of the page. */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar /> {/* Render the SearchBar component. */}
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />{" "}
            {/* Render CustomFilter for fuel options. */}
            <CustomFilter title="year" options={yearsOfProduction} />{" "}
            {/* Render CustomFilter for year options. */}
          </div>
        </div>

        {/* Check if there are cars to display. */}
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {/* Map through allCars and render CarCard components for each car. */}
              {allCars?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </div>

            {/* Render ShowMore component for pagination. */}
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
