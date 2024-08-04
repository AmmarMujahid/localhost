import FooterNav from "@/components/FooterNav";
import ListingDescription from "@/components/ListingDescription";
import ListingHero from "@/components/ListingHero";
import LocationAmenities from "@/components/LocationAmenities";
import Reviews from "@/components/Reviews";
import SimilarStays from "@/components/SimilarStays";

export default function Detail() {
  return (
    <>
      <ListingHero />
      <ListingDescription />
      <LocationAmenities />
      <Reviews />
      <SimilarStays />
      <FooterNav />
    </>
  );
}
