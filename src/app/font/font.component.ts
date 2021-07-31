
import { Component } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';

import {
  faAdjust,
  faBatteryQuarter,
  faBell,
  faCircle,
  faCoffee,
  faEllipsisH,
  faFighterJet,
  faFlag as solidFlag,
  faMagic,
  faMobile,
  faSquare,
  faSync,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.sass'],
})
export class FontComponent {
  faBell = faBell;
  faSync = faSync;
  solidFlag = solidFlag;
  faTimes = faTimes;
  faMagic = faMagic;
  faAdjust = faAdjust;
  faCircle = faCircle;
  faCoffee = faCoffee;
  faSquare = faSquare;
  faMobile = faMobile;
  faEllipsisH = faEllipsisH;
  faFighterJet = faFighterJet;
  faBatteryQuarter = faBatteryQuarter;
  faDummy: IconDefinition = {
    prefix: 'fad',
    iconName: 'dummy' as IconName,
    icon: [512, 512, [], 'f030', ['M50 50 H412 V250 H50 Z', 'M50 262 H412 V462 H50 Z']],
  };

  notificationsCounter = 1000;
  isSyncAnimated = true;
  magicLevel = 0;

  constructor(library: FaIconLibrary, faConfig: FaConfig) {

    faConfig.fallbackIcon = faMagic;
  }
}
