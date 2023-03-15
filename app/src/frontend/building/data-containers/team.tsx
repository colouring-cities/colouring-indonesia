import React, { Fragment } from "react";
import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import SelectDataEntry from "../data-components/select-data-entry";
import NumericDataEntry from "../data-components/numeric-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import { MultiDataEntry } from "../data-components/multi-data-entry/multi-data-entry";
import { LogicalDataEntry } from "../data-components/logical-data-entry/logical-data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";

import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
import SelectDataEntryMultiLingual from "../data-components/select-data-entry-multilingual";
import Verification from "../data-components/verification";
/**
 * Team view/edit section
 */
const TeamView: React.FunctionComponent<CategoryViewProps> = (props) => {
  const building = props.building;
  const currentYear = new Date().getFullYear();
  const currentBuildingConstructionYear = building.date_year || undefined;

  let date_year_title = dataFields.date_year.title_en;
//   let extension_year_tooltip = dataFields.extension_year.tooltip_en;
  let has_extension_title = dataFields.has_extension.title_en;
  let has_extension_tooltip = dataFields.has_extension.tooltip_en;
  let extension_year_title = dataFields.extension_year.title_en;
  let extension_year_tooltip = dataFields.extension_year.tooltip_en;
  let developer_type_title = dataFields.developer_type.title_en;
  let developer_name_title = dataFields.developer_name.title_en;
  let developer_name_tooltip = dataFields.developer_name.tooltip_en;
  let developer_source_link_title = dataFields.developer_source_link.title_en;
  let developer_source_link_tooltip =
    dataFields.developer_source_link.tooltip_en;
  let designers_title = dataFields.designers.title_en;
  let designers_tooltip = dataFields.designers.tooltip_en;
  let designers_source_link_title = dataFields.designers_source_link.title_en;
  let designers_source_link_tooltip =
    dataFields.designers_source_link.tooltip_en;
  let lead_designer_type_title = dataFields.lead_designer_type.title_en;
  let designer_awards_title = dataFields.designer_awards.title_en;
  let designer_awards_tooltip = dataFields.designer_awards.tooltip_en;
  let awards_source_link_title = dataFields.awards_source_link.title_en;
  let awards_source_link_tooltip = dataFields.awards_source_link.tooltip_en;
  let builder_title = dataFields.builder.title_en;
  let builder_source_link_title = dataFields.builder_source_link.title_en;
  let other_team_title = dataFields.other_team.title_en;
  let other_team_source_link_title = dataFields.other_team_source_link.title_en;

  if (i18next.language === "id") {
    date_year_title = dataFields.date_year.title_id;
    // extension_year_tooltip = dataFields.extension_year.tooltip_id;
    has_extension_title = dataFields.has_extension.title_id;
    has_extension_tooltip = dataFields.has_extension.tooltip_id;
    extension_year_title = dataFields.extension_year.title_id;
    extension_year_tooltip = dataFields.extension_year.tooltip_id;
    developer_type_title = dataFields.developer_type.title_id;
    developer_name_title = dataFields.developer_name.title_id;
    developer_name_tooltip = dataFields.developer_name.tooltip_id;
    developer_source_link_title = dataFields.developer_source_link.title_id;
    developer_source_link_tooltip = dataFields.developer_source_link.tooltip_id;
    designers_title = dataFields.designers.title_id;
    designers_tooltip = dataFields.designers.tooltip_id;
    designers_source_link_title = dataFields.designers_source_link.title_id;
    designers_source_link_tooltip = dataFields.designers_source_link.tooltip_id;
    lead_designer_type_title = dataFields.lead_designer_type.title_id;
    designer_awards_title = dataFields.designer_awards.title_id;
    designer_awards_tooltip = dataFields.designer_awards.tooltip_id;
    awards_source_link_title = dataFields.awards_source_link.title_id;
    awards_source_link_tooltip = dataFields.awards_source_link.tooltip_id;
    builder_title = dataFields.builder.title_id;
    builder_source_link_title = dataFields.builder_source_link.title_id;
    other_team_title = dataFields.other_team.title_id;
    let other_team_source_link_title =
      dataFields.other_team_source_link.title_id;
  }

  return (
    <form>
      <InfoBox msg="Can you help us capture information on who built the current building?"></InfoBox>
      <NumericDataEntry
        slug="date_year"
        title={date_year_title}
        value={currentBuildingConstructionYear}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        step={1}
        min={1}
        max={currentYear}
        tooltip={extension_year_tooltip}
      />
      <Verification
        slug="date_year"
        allow_verify={
          props.user !== undefined &&
          props.building.date_year !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("date_year")}
        user_verified_as={props.user_verified.date_year}
        verified_count={props.building.verified.date_year}
      />
      <LogicalDataEntry
        title={has_extension_title}
        slug="has_extension"
        value={props.building.has_extension}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={has_extension_tooltip}
      />
      {props.building.has_extension ? (
        <>
          <NumericDataEntry
            slug="extension_year"
            title={extension_year_title}
            value={props.building.extension_year}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            step={1}
            min={1}
            max={currentYear}
            tooltip={extension_year_tooltip}
          />
          <Verification
            slug="extension_year"
            allow_verify={
              props.user !== undefined &&
              props.building.extension_year !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty("extension_year")}
            user_verified_as={props.user_verified.extension_year}
            verified_count={props.building.verified.extension_year}
          />
        </>
      ) : null}
      <SelectDataEntryMultiLingual
        slug="developer_type"
        title={developer_type_title}
        value={props.building.developer_type}
        // options={dataFields.developer_type.items}
        onChange={props.onChange}
        mode={props.mode}
        copy={props.copy}
      />
      <VerificationMultilingual
        slug="developer_type"
        allow_verify={
          props.user !== undefined &&
          props.building.developer_type !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("developer_type")}
        user_verified_as={props.user_verified.developer_type}
        verified_count={props.building.verified.developer_type}
      />
      <MultiDataEntry
        title={developer_name_title}
        slug="developer_name"
        value={props.building.developer_name}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={developer_name_tooltip}
        placeholder=""
        editableEntries={true}
      />
      <Verification
        slug="developer_name"
        allow_verify={
          props.user !== undefined &&
          props.building.developer_name !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("developer_name")}
        user_verified_as={props.user_verified.developer_name}
        verified_count={props.building.verified.developer_name}
      />
      <MultiDataEntry
        title={developer_source_link_title}
        slug="developer_source_link"
        value={props.building.developer_source_link}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={developer_source_link_tooltip}
        placeholder="https://..."
        editableEntries={true}
        isUrl={true}
      />
      <Verification
        slug="developer_source_link"
        allow_verify={
          props.user !== undefined &&
          props.building.developer_source_link !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "developer_source_link"
        )}
        user_verified_as={props.user_verified.developer_source_link}
        verified_count={props.building.verified.developer_source_link}
      />
      <MultiDataEntry
        title={designers_title}
        slug="designers"
        value={props.building.designers}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={designers_tooltip}
        placeholder=""
        editableEntries={true}
      />
      <Verification
        slug="designers"
        allow_verify={
          props.user !== undefined &&
          props.building.designers !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("designers")}
        user_verified_as={props.user_verified.designers}
        verified_count={props.building.verified.designers}
      />
      <MultiDataEntry
        title={designers_source_link_title}
        slug="designers_source_link"
        value={props.building.designers_source_link}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        tooltip={designers_source_link_tooltip}
        placeholder="https://..."
        editableEntries={true}
        isUrl={true}
      />
      <Verification
        slug="designers_source_link"
        allow_verify={
          props.user !== undefined &&
          props.building.designers_source_link !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "designers_source_link"
        )}
        user_verified_as={props.user_verified.designers_source_link}
        verified_count={props.building.verified.designers_source_link}
      />
      <SelectDataEntryMultiLingual
        slug="lead_designer_type"
        title={lead_designer_type_title}
        value={props.building.lead_designer_type}
        // options={dataFields.lead_designer_type.items}
        onChange={props.onChange}
        mode={props.mode}
        copy={props.copy}
      />
      <VerificationMultilingual
        slug="lead_designer_type"
        allow_verify={
          props.user !== undefined &&
          props.building.lead_designer_type !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("lead_designer_type")}
        user_verified_as={props.user_verified.lead_designer_type}
        verified_count={props.building.verified.lead_designer_type}
      />
      <LogicalDataEntry
        slug="designer_awards"
        title={designer_awards_title}
        tooltip={designer_awards_tooltip}
        value={props.building.designer_awards}
        copy={props.copy}
        onChange={props.onChange}
        mode={props.mode}
      />
      <Verification
        slug="designer_awards"
        allow_verify={
          props.user !== undefined &&
          props.building.designer_awards !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("designer_awards")}
        user_verified_as={props.user_verified.designer_awards}
        verified_count={props.building.verified.designer_awards}
      />
      {props.building.designer_awards ? (
        <>
          <MultiDataEntry
            title={awards_source_link_title}
            slug="awards_source_link"
            value={props.building.awards_source_link}
            mode={props.mode}
            copy={props.copy}
            onChange={props.onChange}
            tooltip={awards_source_link_tooltip}
            placeholder="https://..."
            editableEntries={true}
            isUrl={true}
          />
          <Verification
            slug="awards_source_link"
            allow_verify={
              props.user !== undefined &&
              props.building.awards_source_link !== null &&
              !props.edited
            }
            onVerify={props.onVerify}
            user_verified={props.user_verified.hasOwnProperty(
              "awards_source_link"
            )}
            user_verified_as={props.user_verified.awards_source_link}
            verified_count={props.building.verified.awards_source_link}
          />
        </>
      ) : null}
      <MultiDataEntry
        title={builder_title}
        slug="builder"
        value={props.building.builder}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        placeholder=""
        editableEntries={true}
      />
      <Verification
        slug="builder"
        allow_verify={
          props.user !== undefined &&
          props.building.builder !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("builder")}
        user_verified_as={props.user_verified.builder}
        verified_count={props.building.verified.builder}
      />
      <MultiDataEntry
        title={builder_source_link_title}
        slug="builder_source_link"
        value={props.building.builder_source_link}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        placeholder="https://..."
        editableEntries={true}
        isUrl={true}
      />
      <Verification
        slug="builder_source_link"
        allow_verify={
          props.user !== undefined &&
          props.building.builder_source_link !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "builder_source_link"
        )}
        user_verified_as={props.user_verified.builder_source_link}
        verified_count={props.building.verified.builder_source_link}
      />
      <MultiDataEntry
        title={other_team_title}
        slug="other_team"
        value={props.building.other_team}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        placeholder=""
        editableEntries={true}
      />
      <Verification
        slug="other_team"
        allow_verify={
          props.user !== undefined &&
          props.building.other_team !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty("other_team")}
        user_verified_as={props.user_verified.other_team}
        verified_count={props.building.verified.other_team}
      />
      <MultiDataEntry
        title={other_team_source_link_title}
        slug="other_team_source_link"
        value={props.building.other_team_source_link}
        mode={props.mode}
        copy={props.copy}
        onChange={props.onChange}
        placeholder="https://..."
        editableEntries={true}
        isUrl={true}
      />
      <Verification
        slug="other_team_source_link"
        allow_verify={
          props.user !== undefined &&
          props.building.other_team_source_link !== null &&
          !props.edited
        }
        onVerify={props.onVerify}
        user_verified={props.user_verified.hasOwnProperty(
          "other_team_source_link"
        )}
        user_verified_as={props.user_verified.other_team_source_link}
        verified_count={props.building.verified.other_team_source_link}
      />
    </form>
  );
};
const TeamContainer = withCopyEdit(TeamView);

export default TeamContainer;
