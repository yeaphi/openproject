//-- copyright
// OpenProject is an open source project management software.
// Copyright (C) 2012-2021 the OpenProject GmbH
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See docs/COPYRIGHT.rdoc for more details.
//++

import { OpenprojectCommonModule } from 'core-app/modules/common/openproject-common.module';
import { OpenprojectFieldsModule } from 'core-app/modules/fields/openproject-fields.module';
import { NgModule } from '@angular/core';
import { OpenprojectHalModule } from "core-app/modules/hal/openproject-hal.module";
import { UIRouterModule } from "@uirouter/angular";
import { PROJECTS_ROUTES, uiRouterProjectsConfiguration } from "core-app/modules/projects/projects-routes";
import { ProjectsComponent } from './components/projects/projects.component';
import { DynamicFormsModule } from "core-app/modules/common/dynamic-forms/dynamic-forms.module";
import { NewProjectComponent } from "core-app/modules/projects/components/new-project/new-project.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    // Commons
    OpenprojectCommonModule,
    ReactiveFormsModule,

    OpenprojectHalModule,
    OpenprojectFieldsModule,
    UIRouterModule.forChild({
      states: PROJECTS_ROUTES,
      config: uiRouterProjectsConfiguration
    }),
    DynamicFormsModule,
  ],
  declarations: [
    ProjectsComponent,
    NewProjectComponent,
  ]
})
export class OpenprojectProjectsModule {
}
