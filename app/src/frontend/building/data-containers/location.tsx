import React, { Fragment } from "react";

// import InfoBox from '../../components/info-box';
import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
// import UPRNsDataEntry from '../data-components/uprns-data-entry';
import Verification from "../data-components/verification";
import withCopyEdit from "../data-container";
import { PatternDataEntry } from "../data-components/pattern-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { CategoryViewProps } from "./category-view-props";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const locationNumberPattern = "[1-9]\\d*[a-z]?(-([1-9]\\d*))?"; ///[1-9]\d*[a-z]?(-([1-9]\d*))?/;

const LocationView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const { t } = useTranslation();

  let location_title_title = dataFields.location_title.title_en;
  let location_title_tooltip = dataFields.location_title.tooltip_en;

  let location_name_title = dataFields.location_name.title_en;
  let location_name_tooltip = dataFields.location_name.tooltip_en;

  let location_number_title = dataFields.location_number.title_en;
  let location_number_tooltip = dataFields.location_number.tooltip_en;

  let location_street_title = dataFields.location_street.title_en;
  let location_line_two_title = dataFields.location_line_two.title_en;
  let location_town_title = dataFields.location_town.title_en;
  let location_postcode_title = dataFields.location_postcode.title_en;

  let location_latitude_title = dataFields.location_latitude.title_en;
  let location_longitude_title = dataFields.location_longitude.title_en;

  if (i18next.language === "id") {
    location_title_title = dataFields.location_title.title_id;
    location_title_tooltip = dataFields.location_title.tooltip_id;

    location_name_title = dataFields.location_name.title_id;
    location_name_tooltip = dataFields.location_name.tooltip_id;

    location_number_title = dataFields.location_number.title_id;
    location_number_tooltip = dataFields.location_number.tooltip_id;

    location_street_title = dataFields.location_street.title_id;
    location_line_two_title = dataFields.location_line_two.title_id;

    location_town_title = dataFields.location_town.title_id;
    location_postcode_title = dataFields.location_postcode.title_id;

    location_latitude_title = dataFields.location_latitude.title_id;
    location_longitude_title = dataFields.location_longitude.title_id;
  }

  return (
    <Fragment>
      <DataEntry
        title={location_title_title}
        slug="location_title"
        value={props.building.location_title}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        // tooltip={location_title_tooltip}
        // placeholder=""
        // isUrl={true}
      />
      <Verification
        slug="location_title"
        allow_verify={
          props.user !== undefined &&
          props.building.location_title !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_title")}
        user_verified_as={props.user_verified.location_title}
        verified_count={props.building.verified.location_title}
      />

      <DataEntry
        title={location_name_title}
        slug="location_name"
        value={props.building.location_name}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={location_name_tooltip}
        placeholder="https://..."
        isUrl={true}
      />
      <Verification
        slug="location_name"
        allow_verify={
          props.user !== undefined &&
          props.building.location_name !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_name")}
        user_verified_as={props.user_verified.location_name}
        verified_count={props.building.verified.location_name}
      />

      <PatternDataEntry
        title={location_number_title}
        slug="location_number"
        value={props.building.location_number}
        pattern={locationNumberPattern}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={location_number_tooltip}
      />
      <Verification
        slug="location_number"
        allow_verify={
          props.user !== undefined &&
          props.building.location_number !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_number")}
        user_verified_as={props.user_verified.location_number}
        verified_count={props.building.verified.location_number}
      />

      <DataEntry
        title={location_street_title}
        slug="location_street"
        value={props.building.location_street}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        maxLength={30}
      />
      <Verification
        slug="location_street"
        allow_verify={
          props.user !== undefined &&
          props.building.location_street !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_street")}
        user_verified_as={props.user_verified.location_street}
        verified_count={props.building.verified.location_street}
      />

      <DataEntry
        title={location_line_two_title}
        slug="location_line_two"
        value={props.building.location_line_two}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        maxLength={30}
      />
      <Verification
        slug="location_line_two"
        allow_verify={
          props.user !== undefined &&
          props.building.location_line_two !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_line_two")}
        user_verified_as={props.user_verified.location_line_two}
        verified_count={props.building.verified.location_line_two}
      />
      <DataEntry
        title={location_town_title}
        slug="location_town"
        value={props.building.location_town}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <Verification
        slug="location_town"
        allow_verify={
          props.user !== undefined &&
          props.building.location_town !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_town")}
        user_verified_as={props.user_verified.location_town}
        verified_count={props.building.verified.location_town}
      />
      <DataEntry
        title={location_postcode_title}
        slug="location_postcode"
        value={props.building.location_postcode}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        maxLength={8}
        valueTransform={(x) => x.toUpperCase()}
      />
      <Verification
        slug="location_postcode"
        allow_verify={
          props.user !== undefined &&
          props.building.location_postcode !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_postcode")}
        user_verified_as={props.user_verified.location_postcode}
        verified_count={props.building.verified.location_postcode}
      />
      {/* <DataEntry
            title={dataFields.ref_toid.title}
            slug="ref_toid"
            value={props.building.ref_toid}
            mode={props.mode}
            copy={props.copy}
            tooltip={dataFields.ref_toid.tooltip}
            onChange={props.onChange}
            
            />
        <UPRNsDataEntry
            title={dataFields.uprns.title}
            value={props.building.uprns}
            tooltip={dataFields.uprns.tooltip}
            />
        <DataEntry
            title={dataFields.ref_osm_id.title}
            slug="ref_osm_id"
            value={props.building.ref_osm_id}
            mode={props.mode}
            copy={props.copy}
            tooltip={dataFields.ref_osm_id.tooltip}
            maxLength={20}
            onChange={props.onChange}
            /> */}
      {/* <Verification
            slug="ref_osm_id"
            allow_verify={props.user !== undefined && props.building.ref_osm_id !== null && !props.edited}
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("ref_osm_id")}
            user_verified_as={props.user_verified.ref_osm_id}
            verified_count={props.building.verified.ref_osm_id}
            /> */}
      <NumericDataEntry
        title={location_latitude_title}
        slug="location_latitude"
        value={props.building.location_latitude}
        mode={props.mode}
        copy={props.copy}
        step={0.00001}
        min={-90}
        max={90}
        placeholder="Latitude, e.g. 51.5467"
        onChange={props.onChange}
      />
      <Verification
        slug="location_latitude"
        allow_verify={
          props.user !== undefined &&
          props.building.location_latitude !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_latitude")}
        user_verified_as={props.user_verified.location_latitude}
        verified_count={props.building.verified.location_latitude}
      />
      <NumericDataEntry
        title={location_longitude_title}
        slug="location_longitude"
        value={props.building.location_longitude}
        mode={props.mode}
        copy={props.copy}
        step={0.00001}
        min={-180}
        max={180}
        placeholder="Longitude, e.g. -0.0586"
        onChange={props.onChange}
      />
      <Verification
        slug="location_longitude"
        allow_verify={
          props.user !== undefined &&
          props.building.location_longitude !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("location_longitude")}
        user_verified_as={props.user_verified.location_longitude}
        verified_count={props.building.verified.location_longitude}
      />
    </Fragment>
  );
};
const LocationContainer = withCopyEdit(LocationView);

export default LocationContainer;
