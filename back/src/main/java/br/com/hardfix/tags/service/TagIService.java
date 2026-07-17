package br.com.hardfix.tags.service;

import br.com.hardfix.tags.entity.Tag;

import java.util.List;

public interface TagIService {

    void save(Tag tag) throws RuntimeException;

    List<Tag> findAll() throws RuntimeException;
}