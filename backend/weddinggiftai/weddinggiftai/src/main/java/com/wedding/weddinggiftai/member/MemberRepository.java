package com.wedding.weddinggiftai.member;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
