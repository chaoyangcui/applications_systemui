/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import mLog from '../../common/utils/Log.js';

const MAX_HEIGHT = "100px";
const MAX_WIDTH = "100%";
const TAG = 'LargeStatusBar';

export default {
    props: ['windowHeight', 'windowWidth'],
    data: {
        statusHeight: MAX_HEIGHT,
        statusWidth: MAX_WIDTH,
        backgroundColor: "",
        showClock: false
    },
    onInit() {
        mLog.showInfo(TAG, `largeStatusBar onInit`);
    },

    /**
     * Set button click
     * @param {object}event  quicklySetting Set button click return data
     */
    settingClick(event) {
        mLog.showInfo(TAG, `largeStatusBar settingClick event: ${JSON.stringify(event)}`);
        this.$emit('settingClick', {
            statusHeight: event.detail.statusHeight,
            statusWidth: event.detail.statusWidth,
            notificationHeight: event.detail.notificationHeight,
            notificationWidth: event.detail.notificationWidth,
            backgroundColor: event.detail.backgroundColor
        });
    }
}