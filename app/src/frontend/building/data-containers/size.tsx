import React, { Fragment } from "react";

import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";
import NumericDataEntry from "../data-components/numeric-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Verification from "../data-components/verification";

/**
 * Size view/edit section
 */
const SizeView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const { t } = useTranslation();

  let size_storeys_core_title = dataFields.size_storeys_core.title_en;
  let size_storeys_core_tooltip = dataFields.size_storeys_core.tooltip_en;
  let size_storeys_attic_title = dataFields.size_storeys_attic.title_en;
  let size_storeys_attic_tooltip = dataFields.size_storeys_attic.tooltip_en;
  let size_storeys_basement_title = dataFields.size_storeys_basement.title_en;
  let size_storeys_basement_tooltip =
    dataFields.size_storeys_basement.tooltip_en;
  let size_height_apex_title = dataFields.size_height_apex.title_en;

  let size_height_eaves_title = dataFields.size_height_eaves.title_en;

  let size_floor_area_ground_title = dataFields.size_floor_area_ground.title_en;

  let size_floor_area_total_title = dataFields.size_floor_area_total.title_en;

  let size_width_frontage_title = dataFields.size_width_frontage.title_en;

  if (i18next.language === "id") {
    size_storeys_core_title = dataFields.size_storeys_core.title_id;
    size_storeys_core_tooltip = dataFields.size_storeys_core.tooltip_id;
    size_storeys_attic_title = dataFields.size_storeys_attic.title_id;
    size_storeys_attic_tooltip = dataFields.size_storeys_attic.tooltip_id;
    size_storeys_basement_title = dataFields.size_storeys_basement.title_id;
    size_storeys_basement_tooltip = dataFields.size_storeys_basement.tooltip_id;
    size_height_apex_title = dataFields.size_height_apex.title_id;

    size_height_eaves_title = dataFields.size_height_eaves.title_id;

    size_floor_area_ground_title = dataFields.size_floor_area_ground.title_id;

    size_floor_area_total_title = dataFields.size_floor_area_total.title_id;

    size_width_frontage_title = dataFields.size_width_frontage.title_id;
  }

  return (
    <Fragment>
      <DataEntryGroup name="Storeys">
        <NumericDataEntry
          title={size_storeys_core_title}
          slug="size_storeys_core"
          value={props.building.size_storeys_core}
          mode={props.mode}
          copy={props.copy}
          tooltip={size_storeys_core_tooltip}
          onChange={props.onChange}
          step={1}
          min={0}
        />
        <Verification
          slug="size_storeys_core"
          allow_verify={
            props.user !== undefined &&
            props.building.size_storeys_core !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_storeys_core"
          )}
          user_verified_as={props.user_verified.size_storeys_core}
          verified_count={props.building.verified.size_storeys_core}
        />

        <NumericDataEntry
          title={size_storeys_attic_title}
          slug="size_storeys_attic"
          value={props.building.size_storeys_attic}
          mode={props.mode}
          copy={props.copy}
          tooltip={size_storeys_attic_tooltip}
          onChange={props.onChange}
          step={1}
          min={0}
        />
        <Verification
          slug="size_storeys_attic"
          allow_verify={
            props.user !== undefined &&
            props.building.size_storeys_attic !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_storeys_attic"
          )}
          user_verified_as={props.user_verified.size_storeys_attic}
          verified_count={props.building.verified.size_storeys_attic}
        />

        <NumericDataEntry
          title={size_storeys_basement_title}
          slug="size_storeys_basement"
          value={props.building.size_storeys_basement}
          mode={props.mode}
          copy={props.copy}
          tooltip={size_storeys_basement_tooltip}
          onChange={props.onChange}
          step={1}
          min={0}
        />
        <Verification
          slug="size_storeys_basement"
          allow_verify={
            props.user !== undefined &&
            props.building.size_storeys_basement !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_storeys_basement"
          )}
          user_verified_as={props.user_verified.size_storeys_basement}
          verified_count={props.building.verified.size_storeys_basement}
        />
      </DataEntryGroup>
      <DataEntryGroup name="Height" collapsed={false}>
        <NumericDataEntry
          title={size_height_apex_title}
          slug="size_height_apex"
          value={props.building.size_height_apex}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_height_apex"
          allow_verify={
            props.user !== undefined && props.building.size_height_apex !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty("size_height_apex")}
          user_verified_as={props.user_verified.size_height_apex}
          verified_count={props.building.verified.size_height_apex}
        />

        <NumericDataEntry
          title={size_height_eaves_title}
          slug="size_height_eaves"
          disabled={true}
          value={props.building.size_height_eaves}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
      </DataEntryGroup>
      <DataEntryGroup name="Floor area">
        <NumericDataEntry
          title={size_floor_area_ground_title}
          slug="size_floor_area_ground"
          value={props.building.size_floor_area_ground}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_floor_area_ground"
          allow_verify={
            props.user !== undefined &&
            props.building.size_floor_area_ground !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_floor_area_ground"
          )}
          user_verified_as={props.user_verified.size_floor_area_ground}
          verified_count={props.building.verified.size_floor_area_ground}
        />

        <NumericDataEntry
          title={size_floor_area_total_title}
          slug="size_floor_area_total"
          value={props.building.size_floor_area_total}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={0.1}
          min={0}
        />
        <Verification
          slug="size_floor_area_total"
          allow_verify={
            props.user !== undefined &&
            props.building.size_floor_area_total !== null
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "size_floor_area_total"
          )}
          user_verified_as={props.user_verified.size_floor_area_total}
          verified_count={props.building.verified.size_floor_area_total}
        />
      </DataEntryGroup>
      <NumericDataEntry
        title={size_width_frontage_title}
        slug="size_width_frontage"
        value={props.building.size_width_frontage}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        step={0.1}
        min={0}
      />
      <Verification
        slug="size_width_frontage"
        allow_verify={
          props.user !== undefined &&
          props.building.size_width_frontage !== null
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "size_width_frontage"
        )}
        user_verified_as={props.user_verified.size_width_frontage}
        verified_count={props.building.verified.size_width_frontage}
      />

      <DataEntry title="Total opening area" slug="" value="" mode="view" />
    </Fragment>
  );
};
const SizeContainer = withCopyEdit(SizeView);

export default SizeContainer;
