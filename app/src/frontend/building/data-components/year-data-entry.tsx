import React, { Component, Fragment } from "react";

import Verification from "./verification";
import { dataFields } from "../../config/data-fields-config";
import { CopyProps } from "../data-containers/category-view-props";
import i18next from "i18next";
import NumericDataEntry from "./numeric-data-entry";

interface YearDataEntryProps {
  year: number;
  upper: number;
  lower: number;
  copy?: CopyProps;
  mode?: "view" | "edit" | "multi-edit";
  onChange?: (key: string, value: any) => void;

  onVerify: (slug: string, verify: boolean, x: number, y: number) => void;
  user_verified: boolean;
  user_verified_as: string;
  verified_count: number;
  allow_verify: boolean;

  onVerify_upper: (slug: string, verify: boolean, x: number, y: number) => void;
  user_verified_upper: boolean;
  user_verified_as_upper: string;
  verified_count_upper: number;
  allow_verify_upper: boolean;

  onVerify_lower: (slug: string, verify: boolean, x: number, y: number) => void;
  user_verified_lower: boolean;
  user_verified_as_lower: string;
  verified_count_lower: number;
  allow_verify_lower: boolean;
}

class YearDataEntry extends Component<YearDataEntryProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      year: props.year,
      upper: props.upper,
      lower: props.lower,
      decade: Math.floor(props.year / 10) * 10,
      century: Math.floor(props.year / 100) * 100,
    };
  }
  // TODO add dropdown for decade, century
  // TODO roll in first/last year estimate
  // TODO handle changes internally, reporting out date_year, date_upper, date_lower
  render() {
    const props = this.props;

    const currentYear = new Date().getFullYear();

    let date_year_title = dataFields.date_year.title_en;
    let date_lower_title = dataFields.date_lower.title_en;
    let date_lower_tooltip = dataFields.date_lower.tooltip_en;
    let date_upper_title = dataFields.date_upper.title_en;
    let date_upper_tooltip = dataFields.date_upper.tooltip_en;

    if (i18next.language === "id") {
      date_year_title = dataFields.date_year.title_id;
      date_lower_title = dataFields.date_lower.title_id;
      date_lower_tooltip = dataFields.date_lower.tooltip_id;
      date_upper_title = dataFields.date_upper.title_id;
      date_upper_tooltip = dataFields.date_upper.tooltip_id;
    }

    return (
      <Fragment>
        <NumericDataEntry
          title={date_year_title}
          slug="date_year"
          value={props.year}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          min={1}
          max={currentYear}
          // "type": "year_estimator"
        />
        <Verification
          allow_verify={props.allow_verify}
          slug="date_year"
          onVerify={props.onVerify}
          user_verified={props.user_verified}
          user_verified_as={props.user_verified_as}
          verified_count={props.verified_count}
        />

        <NumericDataEntry
          title={date_lower_title}
          slug="date_lower"
          value={props.lower}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={1}
          min={1}
          max={currentYear}
          tooltip={date_lower_tooltip}
        />
        <Verification
          slug="date_lower"
          allow_verify={props.allow_verify_lower}
          onVerify={props.onVerify_lower}
          user_verified={props.user_verified_lower}
          user_verified_as={props.user_verified_as_lower}
          verified_count={props.verified_count_lower}
        />

        <NumericDataEntry
          title={date_upper_title}
          slug="date_upper"
          value={props.upper}
          mode={props.mode}
          copy={props.copy}
          onChange={props.onChange}
          step={1}
          min={1}
          max={currentYear}
          tooltip={date_upper_tooltip}
        />
        <Verification
          slug="date_upper"
          allow_verify={props.allow_verify_upper}
          onVerify={props.onVerify_upper}
          user_verified={props.user_verified_upper}
          user_verified_as={props.user_verified_as_upper}
          verified_count={props.verified_count_upper}
        />
      </Fragment>
    );
  }
}

export default YearDataEntry;
