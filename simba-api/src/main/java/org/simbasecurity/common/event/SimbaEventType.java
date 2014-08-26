/*
 * Copyright 2013 Simba Open Source
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.simbasecurity.common.event;

public enum SimbaEventType {

    /**
     * This type of event denotes that rules have changed in the data store.
     */
    RULE_CHANGED,

    /**
     * This type of event denotes that configuration parameters have changed in the data store.
     */
    CONFIG_PARAM_CHANGED,

    /**
     * This type of event denotes that authorization has changed in the data store.
     */
    AUTHORIZATION_CHANGED,

    /**
     * This type of event denotes that authorization concerning a specific user has changed.
     */
    USER_AUTHORIZATION_CHANGED
}