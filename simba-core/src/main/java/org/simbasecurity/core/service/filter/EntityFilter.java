/*
 * Copyright 2013-2017 Simba Open Source
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
 *
 */

package org.simbasecurity.core.service.filter;

import org.simbasecurity.core.domain.Policy;
import org.simbasecurity.core.domain.Role;
import org.simbasecurity.core.domain.User;

import java.util.Collection;

/**
 * This class allows the injection of custom filters in the {@link EntityFilterService}.
 *
 * @since 3.0.0
 */
public interface EntityFilter {

    /**
     * @param roles the collection to filter
     * @return the filtered collection
     */
    Collection<Role> filterRoles(Collection<Role> roles);

    /**
     * @param policies the collection to filter
     * @return the filtered collection
     */
    Collection<Policy> filterPolicies(Collection<Policy> policies);

    /**
     * @param users the collection to filter
     * @return the filtered collection
     */
    Collection<User> filterUsers(Collection<User> users);

}
