package com.company.ProjectManagementSystem.config;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;

public class JwtConstant {
    public static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    public static final String JWT_HEADER="Authorization";
}
