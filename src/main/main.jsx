import React from 'react';
import Photosession from './photosession/photosession.jsx';
import First from './first_section/first section.jsx';
import Second from './second_section/second section.jsx';
import Third from './third_section/third section.jsx';
import Fourth from './fourh_section/fourth section.jsx';
import Fifth from './fifth_section/fifth section.jsx';
import Sixth from './sixth_section/sixth section.jsx';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';


const getResource = gql`
query ($id: ID!, $index: SpecialistServiceIndex,
$serviceType: SpecialistServiceType) {
  specialistServices(id: $id, index: $index, type: $serviceType) {
    id
    uri
    name
    price
    type
    rating
    duration
    description
    languages
    city
    lat
    lon
    quantity
    reviews {
      id
    }
    results {
      photos
    }
    specialist {
      uri
      id
      type
      name
      description
      avatar {
        url_thumbnail
      }
    }
    images {
      id
      url_original
      url_thumbnail
      url_crop
    }
    periods {
      since
      to
    }
  }
}`;

const variables = {
	'id': '32c40308-2057-4a33-8cd9-dd952b200d45',
	'index': 'id',
	'serviceType': 'package',
};

const Main = () => (
	<div>
		<Photosession/>
		<Query query={getResource} variables={variables}>
			{({loading, error, data}) => {
				if (loading) return 'Loading';
				if (error) return `Error! ${error.message}`;
				if (data) {
					return data.specialistServices
						.map((data) => (
							<div key={1}>
								<First content={data}/>
								<Second content={data}/>
								<Third content={data}/>
							</div>
						));
				}
			}}
		</Query>
		<Fourth/>
		<Fifth/>
		<Sixth/>
	</div>
);

export default Main;
