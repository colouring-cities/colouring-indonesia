import React, { Fragment } from "react";

import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import DataEntry from "../data-components/data-entry";
import { MultiDataEntry } from "../data-components/multi-data-entry/multi-data-entry";
import SelectDataEntry from "../data-components/select-data-entry";
import TextboxDataEntry from "../data-components/textbox-data-entry";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

/**
 * Use view/edit section
 */
const UseView: React.FunctionComponent<CategoryViewProps> = (props) => {
  if (
    props.building.current_landuse_source ==
      "Expert/personal knowledge of building" ||
    props.building.current_landuse_source == "Online streetview image" ||
    props.building.current_landuse_source == null
  ) {
    const { t } = useTranslation();

    let current_landuse_group_title = dataFields.current_landuse_group.title_en;
    let current_landuse_group_tooltip =
      dataFields.current_landuse_group.tooltip_en;

    let current_landuse_order_title = dataFields.current_landuse_order.title_en;
    let current_landuse_order_tooltip =
      dataFields.current_landuse_order.tooltip_en;

    let current_landuse_source_title =
      dataFields.current_landuse_source.title_en;
    let current_landuse_source_tooltip =
      dataFields.current_landuse_source.tooltip_en;

    let current_landuse_source_items =
      dataFields.current_landuse_source.items_en;

    if (i18next.language === "id") {
      current_landuse_group_title = dataFields.current_landuse_group.title_id;
      current_landuse_group_tooltip =
        dataFields.current_landuse_group.tooltip_id;

      current_landuse_order_title = dataFields.current_landuse_order.title_id;
      current_landuse_order_tooltip =
        dataFields.current_landuse_order.tooltip_id;

      current_landuse_source_title = dataFields.current_landuse_source.title_id;
      current_landuse_source_tooltip =
        dataFields.current_landuse_source.tooltip_id;

      current_landuse_source_items = dataFields.current_landuse_source.items_id;
    }

    return (
      <Fragment>
        <InfoBox msg="93% of properties in UK are dwellings so we have set this as the default colour. Can you help us colour-in all non-residential and mixed use buildings, and verify residential buildings too?"></InfoBox>
        <MultiDataEntry
          title={current_landuse_group_title}
          slug="current_landuse_group"
          value={props.building.current_landuse_group}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          confirmOnEnter={true}
          tooltip={current_landuse_group_tooltip}
          placeholder="Type new land use group here"
          copyable={true}
          autofill={true}
          showAllOptionsOnEmpty={true}
        />
        <VerificationMultilingual
          slug="current_landuse_group"
          allow_verify={
            props.user !== undefined &&
            props.building.current_landuse_group !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "current_landuse_group"
          )}
          user_verified_as={
            props.user_verified.current_landuse_group &&
            props.user_verified.current_landuse_group.join(", ")
          }
          verified_count={props.building.verified.current_landuse_group}
        />
        {props.mode != "view" && (
          <InfoBox msg="Land use order, shown below, is automatically derived from the land use groups"></InfoBox>
        )}
        <DataEntry
          title={current_landuse_order_title}
          tooltip={current_landuse_order_tooltip}
          slug="current_landuse_order"
          value={props.building.current_landuse_order}
          mode={props.mode}
          disabled={true}
          copy={props.copy}
          onChange={props.onChange}
        />
        <SelectDataEntry
          title={current_landuse_source_title}
          slug="current_landuse_source"
          value={props.building.current_landuse_source}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={current_landuse_source_tooltip}
          placeholder={dataFields.current_landuse_source.example}
          options={current_landuse_source_items}
        />
        <VerificationMultilingual
          slug="current_landuse_source"
          allow_verify={
            props.user !== undefined &&
            props.building.current_landuse_source !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "current_landuse_source"
          )}
          user_verified_as={props.user_verified.current_landuse_source}
          verified_count={props.building.verified.current_landuse_source}
        />
      </Fragment>
    );
  } else {
    const { t } = useTranslation();

    let current_landuse_group_title = dataFields.current_landuse_group.title_en;
    let current_landuse_group_tooltip =
      dataFields.current_landuse_group.tooltip_en;

    let current_landuse_order_title = dataFields.current_landuse_order.title_en;
    let current_landuse_order_tooltip =
      dataFields.current_landuse_order.tooltip_en;

    let current_landuse_source_title =
      dataFields.current_landuse_source.title_en;
    let current_landuse_source_tooltip =
      dataFields.current_landuse_source.tooltip_en;

    let current_landuse_link_title = dataFields.current_landuse_link.title_en;
    let current_landuse_link_tooltip =
      dataFields.current_landuse_link.tooltip_en;

      let current_landuse_source_items =
      dataFields.current_landuse_source.items_en;

    if (i18next.language === "id") {
      current_landuse_group_title = dataFields.current_landuse_group.title_id;
      current_landuse_group_tooltip =
        dataFields.current_landuse_group.tooltip_id;

      current_landuse_order_title = dataFields.current_landuse_order.title_id;
      current_landuse_order_tooltip =
        dataFields.current_landuse_order.tooltip_id;

      current_landuse_source_title = dataFields.current_landuse_source.title_id;
      current_landuse_source_tooltip =
        dataFields.current_landuse_source.tooltip_id;

      current_landuse_link_title = dataFields.current_landuse_link.title_id;
      current_landuse_link_tooltip = dataFields.current_landuse_link.tooltip_id;

      current_landuse_source_items =
      dataFields.current_landuse_source.items_id;
    }

    return (
      <Fragment>
        <InfoBox msg="93% of properties in UK are dwellings so we have set this as the default colour. Can you help us colour-in all non-residential and mixed use buildings, and verify residential buildings too?"></InfoBox>
        <MultiDataEntry
          title={current_landuse_group_title}
          slug="current_landuse_group"
          value={props.building.current_landuse_group}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          confirmOnEnter={true}
          tooltip={current_landuse_group_tooltip}
          placeholder="Type new land use group here"
          copyable={true}
          autofill={true}
          showAllOptionsOnEmpty={true}
        />
        <VerificationMultilingual
          slug="current_landuse_group"
          allow_verify={
            props.user !== undefined &&
            props.building.current_landuse_group !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "current_landuse_group"
          )}
          user_verified_as={
            props.user_verified.current_landuse_group &&
            props.user_verified.current_landuse_group.join(", ")
          }
          verified_count={props.building.verified.current_landuse_group}
        />
        {props.mode != "view" && (
          <InfoBox msg="Land use order, shown below, is automatically derived from the land use groups"></InfoBox>
        )}
        <DataEntry
          title={current_landuse_order_title}
          tooltip={current_landuse_order_tooltip}
          slug="current_landuse_order"
          value={props.building.current_landuse_order}
          mode={props.mode}
          disabled={true}
          copy={props.copy}
          onChange={props.onChange}
        />
        <SelectDataEntry
          title={current_landuse_source_title}
          slug="current_landuse_source"
          value={props.building.current_landuse_source}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={current_landuse_source_tooltip}
          placeholder={dataFields.current_landuse_source.example}
          options={current_landuse_source_items}
        />
        <VerificationMultilingual
          slug="current_landuse_source"
          allow_verify={
            props.user !== undefined &&
            props.building.current_landuse_source !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "current_landuse_source"
          )}
          user_verified_as={props.user_verified.current_landuse_source}
          verified_count={props.building.verified.current_landuse_source}
        />
        <MultiDataEntry
          title={current_landuse_link_title}
          slug="current_landuse_link"
          value={props.building.current_landuse_link}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          tooltip={current_landuse_link_tooltip}
          placeholder="https://..."
          editableEntries={true}
          isUrl={true}
        />
        <VerificationMultilingual
          slug="current_landuse_link"
          allow_verify={
            props.user !== undefined &&
            props.building.current_landuse_link !== null &&
            !props.edited
          }
          onVerify={props.onVerify}
          user_verified={props.user_verified.hasOwnProperty(
            "current_landuse_link"
          )}
          user_verified_as={props.user_verified.current_landuse_link}
          verified_count={props.building.verified.current_landuse_link}
        />
      </Fragment>
    );
  }
};
const UseContainer = withCopyEdit(UseView);

export default UseContainer;
