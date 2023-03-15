import React from 'react';
import { useAuth } from '../auth-context';

import { categoriesConfig, Category } from '../config/categories-config';
import { categoryUiConfig } from '../config/category-ui-config';
import { Building, UserVerified } from '../models/building';

import BuildingNotFound from './building-not-found';

interface BuildingViewProps {
    cat: Category;
    mode: 'view' | 'edit';
    building?: Building;
    user_verified?: any;
    onBuildingUpdate: (buildingId: number, updatedData: Building) => void;
    onUserVerifiedUpdate: (buildingId: number, updatedData: UserVerified) => void;
}

/**
 * Top-level container for building view/edit form
 *
 * @param props
 */
const BuildingView: React.FunctionComponent<BuildingViewProps> = (props) => {
    const { user } = useAuth();
    const DataContainer = categoryUiConfig[props.cat];
    
    const categoryConfig = categoriesConfig[props.cat];

    if(categoryConfig == undefined) {
        return <BuildingNotFound mode="view" />;
    }

    const {
        name_id,
        name_en,
        aboutUrl,
        intro_id,
        intro_en,
        inactive = false
    } = categoryConfig;

    return <DataContainer
    {...props}
    title_id={name_id}
    title_en={name_en}
    help={aboutUrl}
    intro_id={intro_id}
    intro_en={intro_en}
    inactive={inactive}
    user={user}
    />; 
};

export default BuildingView;
