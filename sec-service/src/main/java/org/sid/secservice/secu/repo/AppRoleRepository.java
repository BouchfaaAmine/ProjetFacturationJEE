package org.sid.secservice.secu.repo;

import org.sid.secservice.secu.entities.AppRole;
import org.sid.secservice.secu.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRoleRepository extends JpaRepository<AppRole,Long> {
    AppRole findByRoleName(String roleName);
}
