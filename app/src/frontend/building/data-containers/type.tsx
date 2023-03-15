import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import withCopyEdit from "../data-container";
import i18next from "i18next";
import { CategoryViewProps } from "./category-view-props";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";

const AttachmentFormOptions = [
  "Detached",
  "Semi-Detached",
  "End-Terrace",
  "Mid-Terrace",
];

/**
 * Type view/edit section
 */
const TypeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  let original_building_use_title = dataFields.original_building_use.title_en;
  let original_building_use_tooltip =
    dataFields.original_building_use.tooltip_en;

  let size_roof_shape_title = dataFields.size_roof_shape.title_en;
  // let size_roof_shape_tooltip = dataFields.size_roof_shape.tooltip_en;

  let building_attachment_form_title =
    dataFields.building_attachment_form.title_en;
  let building_attachment_form_tooltip =
    dataFields.building_attachment_form.tooltip_en;

  if (i18next.language === "id") {
    original_building_use_title = dataFields.original_building_use.title_id;
    original_building_use_tooltip = dataFields.original_building_use.tooltip_id;

    size_roof_shape_title = dataFields.size_roof_shape.title_id;
    // size_roof_shape_tooltip = dataFields.size_roof_shape.tooltip_id;

    building_attachment_form_title =
      dataFields.building_attachment_form.title_id;
    building_attachment_form_tooltip =
      dataFields.building_attachment_form.tooltip_id;
  }

  return (
    <Fragment>
      <DataEntry
        title="Base type classification"
        slug=""
        value=""
        mode="view"
      />
      <DataEntry
        title="Local typology/architectural style"
        slug=""
        value=""
        mode="view"
      />
      <DataEntry
        title={original_building_use_title}
        slug="original_building_use" // doesn't exist in database yet
        tooltip={original_building_use_tooltip}
        value={undefined}
        copy={props.copy}
        mode={props.mode}
        onChange={props.onChange}
        disabled={true}
      />
      <SelectDataEntry
        title={size_roof_shape_title}
        slug="size_roof_shape"
        value={props.building.size_roof_shape}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        disabled={true}
        options={["Flat", "Pitched", "Other"]}
      />
      <SelectDataEntryMultiLingual
        title={building_attachment_form_title}
        slug="building_attachment_form"
        value={props.building.building_attachment_form}
        tooltip={building_attachment_form_tooltip}
        // options={AttachmentFormOptions}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
      />
      <VerificationMultilingual
        slug="building_attachment_form"
        allow_verify={
          props.user !== undefined &&
          props.building.building_attachment_form !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "building_attachment_form"
        )}
        user_verified_as={props.user_verified.building_attachment_form}
        verified_count={props.building.verified.building_attachment_form}
      />

      {/* <DataEntry
        title="Local typology mutations"
        slug=""
        value=""
        mode="view"
      />
      <DataEntry
        title="3D procedural model classifications"
        slug=""
        value=""
        mode="view"
      />
      <DataEntry
        title="Dynamic tissue type classificaiton"
        slug=""
        value=""
        mode="view"
      /> */}
      {/* <NumericDataEntry
                title={dataFields.date_change_building_use.title}
                slug="date_change_building_use"
                value={props.building.date_change_building_use}
                tooltip={dataFields.date_change_building_use.tooltip}
                min={1086}
                max={new Date().getFullYear()}
                step={1}
                mode={props.mode}
                copy={props.copy}
                onChange={props.onChange}
            /> */}
    </Fragment>
  );
};
const TypeContainer = withCopyEdit(TypeView);

export default TypeContainer;
