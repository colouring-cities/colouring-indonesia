import React, { Fragment } from "react";

import InfoBox from "../../components/info-box";
import { dataFields } from "../../config/data-fields-config";
import CheckboxDataEntry from "../data-components/checkbox-data-entry";
import DataEntry from "../data-components/data-entry";
import { DataEntryGroup } from "../data-components/data-entry-group";
import SelectDataEntry from "../data-components/select-data-entry";
import VerificationMultilingual from "../data-components/verification-multilingual";
import withCopyEdit from "../data-container";

import { CategoryViewProps } from "./category-view-props";
import i18next from "i18next";
/**
 * Planning view/edit section
 */
const PlanningView: React.FunctionComponent<CategoryViewProps> = (props) => {
  let planning_portal_link_title = dataFields.planning_portal_link.title_en;
  let planning_demolition_proposed_title =
    dataFields.planning_demolition_proposed.title_en;
  let planning_in_conservation_area_title =
    dataFields.planning_in_conservation_area.title_en;
  let planning_conservation_area_name_title =
    dataFields.planning_conservation_area_name.title_en;
  let planning_in_list_title = dataFields.planning_in_list.title_en;
  let planning_list_id_title = dataFields.planning_list_id.title_en;
  let planning_list_cat_title = dataFields.planning_list_cat.title_en;
  let planning_list_grade_title = dataFields.planning_list_grade.title_en;
  let planning_heritage_at_risk_id_title =
    dataFields.planning_heritage_at_risk_id.title_en;
  let planning_world_list_id_title = dataFields.planning_world_list_id.title_en;
  let planning_in_glher_title = dataFields.planning_in_glher.title_en;
  let planning_glher_url_title = dataFields.planning_glher_url.title_en;
  let planning_in_apa_title = dataFields.planning_in_apa.title_en;
  let planning_apa_name_title = dataFields.planning_apa_name.title_en;
  let planning_apa_tier_title = dataFields.planning_apa_tier.title_en;
  let planning_in_local_list_title = dataFields.planning_in_local_list.title_en;
  let planning_local_list_url_title =
    dataFields.planning_local_list_url.title_en;
  let planning_in_historic_area_assessment_title =
    dataFields.planning_in_historic_area_assessment.title_en;
  let planning_historic_area_assessment_url_title =
    dataFields.planning_historic_area_assessment_url.title_en;

  if (i18next.language === "id") {
    planning_portal_link_title = dataFields.planning_portal_link.title_id;
    planning_demolition_proposed_title =
      dataFields.planning_demolition_proposed.title_id;
    planning_in_conservation_area_title =
      dataFields.planning_in_conservation_area.title_id;
    planning_conservation_area_name_title =
      dataFields.planning_conservation_area_name.title_id;
    planning_in_list_title = dataFields.planning_in_list.title_id;
    planning_list_id_title = dataFields.planning_list_id.title_id;
    planning_list_cat_title = dataFields.planning_list_cat.title_id;
    planning_list_grade_title = dataFields.planning_list_grade.title_id;
    planning_heritage_at_risk_id_title =
      dataFields.planning_heritage_at_risk_id.title_id;
    planning_world_list_id_title = dataFields.planning_world_list_id.title_id;
    planning_in_glher_title = dataFields.planning_in_glher.title_id;
    planning_glher_url_title = dataFields.planning_glher_url.title_id;
    planning_in_apa_title = dataFields.planning_in_apa.title_id;
    planning_apa_name_title = dataFields.planning_apa_name.title_id;
    planning_apa_tier_title = dataFields.planning_apa_tier.title_id;
    planning_in_local_list_title = dataFields.planning_in_local_list.title_id;
    planning_local_list_url_title = dataFields.planning_local_list_url.title_id;
    planning_in_historic_area_assessment_title =
      dataFields.planning_in_historic_area_assessment.title_id;
    planning_historic_area_assessment_url_title =
      dataFields.planning_historic_area_assessment_url.title_id;
  }

  return (
    <Fragment>
      <InfoBox type="warning">
        This section is under development{" "}
        {/* <a href="https://github.com/colouring-cities/manual/wiki/G2.-Data-capture-(2).-Live-streaming-and-automated-methods">
          read here
        </a> */}
        .
      </InfoBox>

    </Fragment>
  );
};
const PlanningContainer = withCopyEdit(PlanningView);

export default PlanningContainer;
