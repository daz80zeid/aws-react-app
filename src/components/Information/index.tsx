import React, {FC} from 'react';
import {ArrivalInfo, Checklist} from "../index";

export const Information:FC = () => {
    const description = {
        services: 'Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.',
        accessibility: 'We\'re committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:',
        servicesArray: ["Indoor pool", "24-hour fitness center", "Massage therapy", "Full service spa", "In-room jacuzzi tubs", `Rooftop café  \n; smoothie bar`,
            "Coffee bar  \n; pastry shop", "Traditional continental breakfast", "24-hour concierge service", "Business center",
            "Complimentary wireless service", "Laundry \n; dry cleaning service", "Daily paper", "Certified green hotel",
            "Pet-friendly rooms  \n; common areas"],
        accessibilityArray: [
          " Grab bars on tub walls", "Shower chairs", "Hand held shower sprayers", "Higher toilets \n; toilet modifiers",
            "Lower sink faucet handles", "Wheelchair clearance under sinks\n; vanity", "Lower racks in closet",
            "TDD machines", "Telephone light signalers \n; smoke alarms", "Telephone amplification handsets",
            "Closed captioned television converters", "Vibrating alarm clocks", "Telephones with volume control"]
    }
    return (
        <div className="scene" id="hotelinfo">
            <article className="heading">
                <h1>Essential Info</h1>
            </article>
            <article id="usefulinfo">
               <ArrivalInfo/>
                <Checklist title={'Services and Amenities'} id={'services'} description={description.services} checklistItems={description.servicesArray}/>
                <Checklist title={'Accessibility'} id={'accessibility'} description={description.accessibility}  checklistItems={description.accessibilityArray}/>
            </article>
            <article id="greenprogram">
                <h2>Landon Green Program</h2>
                <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
            </article>
        </div>
    );
};
